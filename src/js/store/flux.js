const BASE_URL = "http://localhost:8080";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {},
		actions: {
			registerContact: async ({ nombre, last_name, username, email, password }) => {
				let url = BASE_URL + "/register";
				let new_user = {
					email: email,
					name: nombre,
					last_name: last_name,
					username: username,
					password: password
				};
				console.log(JSON.stringify(new_user));
				let response = await fetch(url, {
					method: "POST",
<<<<<<< HEAD
					body: JSON.stringify({
						email: email,
						name: name,
						last_name: last_name,
						username: username,
						password: password
					})
=======
					headers: { "Content-Type": "application-json" },
					body: JSON.stringify(new_user)
>>>>>>> master
				});
				if (response.ok) {
					let created_user = JSON.stringify(response.body);
					console.log(created_user);
					return true;
				} else {
<<<<<<< HEAD
					console.log(response);
					console.log(response.status);
=======
					console.log(JSON.stringify(response.body));
					console.log(JSON.stringify(response.status));
>>>>>>> master
					return false;
				}
			}
		}
	};
};

export default getState;
