const BASE_URL = "http://localhost:8080";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {},
		actions: {
			registerContact: async (email, name, last_name, username, password) => {
				let url = BASE_URL + "/register";
				// let actions = getActions();
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
					// actions.login(new_user.username, new_user.password);
					return true;
				} else {
					console.log(response.statusText);
					return false;
				}
			},

			login: async (username = null, email = null, password) => {
				let url = BASE_URL + "/login";
				let login_data = {};
				if (username != null) {
					login_data = {
						username: username,
						password: password
					};
				} else {
					login_data = {
						email: email,
						password: password
					};
				}
				let response = await fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(login_data)
				});
			}
		}
	};
};

export default getState;
