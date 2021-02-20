export const initialState = {
	cart: [],
	user: null
};

// Selector inside of the reducer
export const getCartTotal = cart => cart.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "ADD_TO_CART":
			return {
				...state,
				cart: [...state.cart, action.item]
			};
		case "EMPTY_BASKET":
			return {
				...state,
				cart: []
			};
		case "REMOVE_FROM_CART": // case to remove items from the cart
			const index = state.cart.findIndex(cartItem => cartItem.id === action.id);
			let newCart = [...state.cart];
			if (index >= 0) {
				newCart.splice(index, 1); //index of the item
			} else {
				console.warn(`cant remove id ${action.id}`);
			}
			return {
				...state,
				cart: newCart
			};
		case "SET_USER":
			return {
				...state,
				user: action.user
			};
		default:
			return state;
	}
};

export default reducer;