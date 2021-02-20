const BASE_URL = "http://localhost:8080";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
		},
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
					Authorization: "Bearer " + localStorage.getItem("token")
				});
				let response = await fetch(url, {
					method: "GET",
					headers: customHeader
				});
				if (response.ok) {
					console.log(localStorage.getItem("name") + " esta logueado");
					return true;
				} else {
					localStorage.token = "";
					localStorage.name = "";
					return false;
				}
			},

			login: async (user, password) => {
				let url = BASE_URL + "/login";
				let actions = getActions();
				let store = getStore();
				let login_data = {};
				let atCounter = false;
				localStorage.setItem("token", "");
				localStorage.setItem("name", "");

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

				let response = await fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(login_data)
				});
				let information = await response.json();

				if (response.ok) {
					localStorage.token = information.jwt;
					localStorage.name = information.name;
					console.log("login aprobado");
					let response2 = actions.check();
					if (response2) {
						console.log("check aprobado");
						return true;
					} else {
						console.log("check reprobado");
						return false;
					}
				} else {
					console.log("login reprobado");
					return false;
				}
			},

			recipes: async () => {
				let url = BASE_URL + "/recipes";
				let store = getStore();
				let response = await fetch(url, {
					method: "GET"
				});
				let information = await response.json();
				if (response.ok) {
					setStore({ recipes: information });
					console.log(store.recipes);
					return true;
				} else {
					return false;
				}
			},

			saveSelectedIngredients: selectedIngredientes => {
				setStore({ selectedIngredientes: selectedIngredientes });
			}
		}
	};
};

export default getState;
