const BASE_URL = "http://localhost:8080";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {}
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

			login: async (user, password) => {
				let url = BASE_URL + "/login";
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
				let respuesta = await response.json();
				setStore({ user: respuesta });
				if (response.ok) {
					console.log("login aprobado");
					url = BASE_URL + "/check";
					const store = getStore();
					let customHeader = new Headers({
						Authorization: "Bearer " + store.user.jwt
					});
					let response1 = await fetch(url, {
						method: "GET",
						headers: customHeader
					});

					if (response1.ok) {
						console.log("check aprobado");
					} else {
						console.log("check reprobado");
					}
					return true;
				} else {
					console.log("login reprobado");
				}
			}
		}
	};
};

export default getState;
