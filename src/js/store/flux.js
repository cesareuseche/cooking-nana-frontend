const BASE_URL = "http://127.0.0.1:8080";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {},
			token: "",
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

			check: async () => {
				let url = BASE_URL + "/check";
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
					setStore({ user: "" });
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

				if (response.ok) {
					setStore({ user: information, token: information.jwt, logOutConfirmation: true });
					sessionStorage.setItem("token", information.jwt);
					sessionStorage.setItem("id", information.id);
					sessionStorage.setItem("name", information.name);
					sessionStorage.setItem("logOutConfirmation", true);
					sessionStorage.setItem("user", information);
					let response2 = actions.check();
					if (response2) {
						return true;
					} else {
						return false;
					}
				} else {
					return false;
				}
			},

			logOut: () => {
				sessionStorage.setItem("token", "");
				sessionStorage.setItem("id", "");
				sessionStorage.setItem("name", "");
				sessionStorage.setItem("logOutConfirmation", "");
				sessionStorage.setItem("user", {});
				setStore({ logOutConfirmation: false, user: {}, token: "" });
			},

			checking: () => {
				if (sessionStorage.getItem("logOutConfirmation")) {
					setStore({
						user: sessionStorage.getItem("user"),
						logOutConfirmation: true,
						toke: sessionStorage.token
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
				let recetas = [];
				for (let i = 0; i < store.match.length; i++) {
					let url = BASE_URL + "/recipes/" + store.match[i];
					let response = await fetch(url);
					let recipe = await response.json();
					if (recipe != "") {
						recetas.push(recipe);
					}
				}
				setStore({ recipes: recetas });
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
