const BASE_URL = "http://localhost:8080";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {},
			recipes: []
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

			check: async (token = null) => {
				let url = BASE_URL + "/check";
				let store = getStore();
				let customHeader = new Headers({
					Authorization: "Bearer " + token
				});
				let response = await fetch(url, {
					method: "GET",
					headers: customHeader
				});
				if (response.ok) {
					console.log(store.user.name + " esta logueado");
					return true;
				} else {
					setStore({ user: {} });
					return false;
				}
			},

			login: async (user, password) => {
				let url = BASE_URL + "/login";
				let actions = getActions();
				let store = getStore();
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

				let response = await fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(login_data)
				});
				let information = await response.json();

				setStore({ user: information });
				if (response.ok) {
					console.log("login aprobado");
					let response2 = actions.check(store.user.jwt);
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
				let response = await (url,
				{
					method: "GET"
				});
				let information = response.json();
				if (response.ok) {
					setStore({ recipes: information });
					console.log("te traje las recetas");
					return true;
				} else {
					return false;
				}
			}
		}
	};
};

export default getState;
