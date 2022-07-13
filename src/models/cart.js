export const cart = {
  state: {
    quantity: 0,
    products: [],
  },
  reducers: {
    increment(state) {
      return { ...state, quantity: state.quantity + 1 };
    },
    decrement(state) {
      if (state.quantity > 0) {
        return state.quantity - 1;
      }
    },
    resetCart(state) {
      state.quantity = 0;
      state.products = [];
    },
    addToCart(state, payload) {
      console.log(payload);
      const product = state.products?.find(
        (product) => product.id === payload.id
      );
      if (product) {
        product.qty += payload.qty;
        return state;
      }
      return {
        ...state,
        products: [...state.products, { ...payload, qty: 1 }],
      };
    },
  },
};
