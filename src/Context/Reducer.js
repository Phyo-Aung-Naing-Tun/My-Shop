export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD-DATA":
      return { ...state, product: action.payload };
    case "ADD_CARTS_DATAS":
      const doubleProduct = state.cart.find(
        (cart) => cart.id === action.payload.id
      );
      if (doubleProduct) {
        return { ...state, cart: [...state.cart] };
      } else {
        return { ...state, cart: [...state.cart, { ...action.payload }] };
      }
    case "REMOVING":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};
