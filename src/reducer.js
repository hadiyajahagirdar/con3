
const initialState = {
    products: [],
    cart: [],
    checkoutSuccess: false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PRODUCTS':
        return {
          ...state,
          products: action.payload,
        };
      case 'ADD_TO_CART':
        const product = action.payload;
        const alreadyInCart = state.cart.find((item) => item.id === product.id);
        if (alreadyInCart) {
          return state;
        }
        return {
          ...state,
          cart: [...state.cart, product],
        };
      case 'REMOVE_FROM_CART':
        const updatedCart = state.cart.filter((item) => item.id !== action.payload);
        return {
          ...state,
          cart: updatedCart,
        };
      case 'CHECKOUT':
        return {
          ...state,
          cart: [],
          checkoutSuccess: true,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  