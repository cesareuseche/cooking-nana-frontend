const BASE_URL = "http://localhost:8080";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {},
		actions: {
			registerContact: async ({ email, name, last_name, username, password }) => {
				let url = BASE_URL + "/register";
				let new_user = {
					email: email,
					name: name,
					last_name: last_name,
					username: username,
					password: password
				};
				let response = await fetch(url, {
					method: "POST",
					body: JSON.stringify({
						email: email,
						name: name,
						last_name: last_name,
						username: username,
						password: password
					})
				});
				if (response.ok) {
					let created_user = JSON.stringify(response.body);
					console.log(created_user);
					return true;
				} else {
					console.log(response);
					console.log(response.status);
					return false;
				}
			}
		}
	};
};

export default getState;
