const BASE_URL = "http://127.0.0.1:8080";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {},
			logOutConfirmation: false,
			match: {},
			recipes: [],
			recipeToShow: {}
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
					return false;
				}
			},

			login: async (user_name, password) => {
				let url = BASE_URL + "/login";
				let actions = getActions();
				let store = getStore();
				let login_data = {};
				let atCounter = false;

				for (var i = 0; i < user_name.length; i++) {
					if (atCounter) {
						break;
					}
					if (user_name.charAt(i) == "@") {
						atCounter = true;
					}
				}

				if (!atCounter) {
					login_data = {
						username: user_name,
						password: password
					};
				} else if (atCounter) {
					login_data = {
						email: user_name,
						password: password
					};
				}
				let response = await fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(login_data)
				});
				let user = await response.json();
				actions.saveUserData(user);
				if (response.ok) {
					let response2 = actions.checkUser();
					if (response2) {
						setStore({ logOutConfirmation: true });
						return true;
					} else {
						actions.logOut();
						return false;
					}
				} else {
					actions.logOut();
					return false;
				}
			},

			checkUser: async () => {
				let url = BASE_URL + "/check";
				let actions = getActions();
				let store = getStore();
				let customHeader = new Headers({
					Authorization: "Bearer " + store.user.jwt
				});
				let response = await fetch(url, {
					method: "GET",
					headers: customHeader
				});
				if (response.ok) {
					return true;
				} else {
					return false;
				}
			},

			saveUserData: (user, google = null) => {
				setStore({ user: user, logOutConfirmation: true });
				sessionStorage.setItem("token", user.jwt);
				sessionStorage.setItem("id", user.id);
				sessionStorage.setItem("logOutConfirmation", true);
				sessionStorage.setItem("picture", user.picture);
				if (google) {
					sessionStorage.setItem("name", user.name);
				} else {
					sessionStorage.setItem(
						"name",
						user.name.charAt(0).toUpperCase() +
							user.name.slice(1) +
							" " +
							user.last_name.charAt(0).toUpperCase() +
							user.last_name.slice(1)
					);
				}
			},

			logOut: () => {
				setStore({ logOutConfirmation: false, user: {} });
				sessionStorage.setItem("token", "");
				sessionStorage.setItem("id", "");
				sessionStorage.setItem("name", "");
				sessionStorage.setItem("logOutConfirmation", "");
				sessionStorage.setItem("picture", "");
			},

			checkingUser: async () => {
				if (sessionStorage.getItem("logOutConfirmation")) {
					let user = {
						name: sessionStorage.getItem("name"),
						jwt: sessionStorage.getItem("token"),
						id: sessionStorage.getItem("id")
					};
					setStore({
						user: user,
						logOutConfirmation: true
					});
				}
			},

			searchRecipes: async ingredients => {
				let url = BASE_URL + "/search";
				let store = getStore();

				let response = await fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(ingredients)
				});

				let information = await response.json();
				if (response.ok) {
					setStore({ match: information.no_dupe_id_list });
					return true;
				} else {
					return false;
				}
			},

			saveRecipes: async e => {
				let store = getStore();
				let recipes = [];
				for (let i = 0; i < store.match.length; i++) {
					let url = BASE_URL + "/recipes/" + store.match[i];
					let response = await fetch(url);
					let recipe = await response.json();
					if (recipe != "") {
						recipes.push(recipe);
					}
				}
				setStore({ recipes: recipes });
				return true;
			},

			setRecipeToStore: recipe => {
				let store = getStore();
				setStore({ recipeToShow: recipe });
			},

			searchRecipe: () => {
				let store = getStore();
				return store.recipes[store.recipeID];
			}
		}
	};
};

export default getState;
