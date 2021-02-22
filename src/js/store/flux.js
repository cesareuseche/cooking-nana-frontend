const BASE_URL = "http://127.0.0.1:8080";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: { match: [] },
		actions: {
			registerContact: async (email, name, last_name, username, password) => {
				let url = BASE_URL + "/register";
				let actions = getActions();
				let new_user = {
					email: email,
					name: name,
					last_name: last_name,
					username: username,
					password: password
				};
				let response = await fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(new_user)
				});
				if (response.ok) {
					actions.login(new_user.username, new_user.password);
					return true;
				} else {
					console.log(response.statusText);
					return false;
				}
			},

			check: async () => {
				let url = BASE_URL + "/check";
				let customHeader = new Headers({
					Authorization: "Bearer " + sessionStorage.getItem("token")
				});
				let response = await fetch(url, {
					method: "GET",
					headers: customHeader
				});
				if (response.ok) {
					console.log(sessionStorage.getItem("name") + " esta logueado");
					return true;
				} else {
					sessionStorage.token = "";
					sessionStorage.name = "";
					return false;
				}
			},

			login: async (user, password) => {
				let url = BASE_URL + "/login";
				let actions = getActions();
				let login_data = {};
				let atCounter = false;

				for (var i = 0; i < user.length; i++) {
					if (atCounter) {
						break;
					}
					if (user.charAt(i) == "@") {
						atCounter = true;
					}
				}

				if (!atCounter) {
					login_data = {
						username: user,
						password: password
					};
				} else if (atCounter) {
					login_data = {
						email: user,
						password: password
					};
				}
				console.log("vamos a llamar a login");
				let response = await fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(login_data)
				});
				let information = await response.json();

				if (response.ok) {
					console.log("hice loguin, viene check");
					let response2 = actions.check();
					if (response2) {
						sessionStorage.setItem("token", information.jwt);
						sessionStorage.setItem("name", information.name);
						sessionStorage.logueado = true;
						return true;
					} else {
						return false;
					}
				} else {
					return false;
				}
			},

			// recipes: async () => {
			// 	let url = BASE_URL + "/recipes";
			// 	let store = getStore();
			// 	let response = await fetch(url, {
			// 		method: "GET"
			// 	});
			// 	let information = await response.json();
			// 	if (response.ok) {
			// 		setStore({ recipes: information });
			// 		console.log(store.recipes);
			// 		return true;
			// 	} else {
			// 		return false;
			// 	}
			// },

			logueando: () => {
				sessionStorage.setItem("logueado", false);
			},

			match: async ingredients => {
				console.log("Los ingredientes en el flux son: " + JSON.stringify(ingredients));
				let url = BASE_URL + "/search";

				let response = await fetch(url, {
					method: "POST",
					// headers: [
					// 	["Content-Type", "application/x-www-form-urlencoded"],
					// 	["Content-Type", "multipart/form-data"],
					// 	["Content-Type", "text/plain"],
					// 	["Content-Type", "application/json"]
					// ],
					body: JSON.stringify(ingredients)
				});

				let information = await response.json();
				console.log("El back me mando: " + information);
				if (response.ok) {
					setStore({ match: information });
					return true;
				} else {
					console.log(response.status);
					return false;
				}
			}
		}
	};
};

export default getState;
