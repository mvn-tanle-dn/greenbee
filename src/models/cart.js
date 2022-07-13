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
      let index = state.products?.findIndex(
        (product) => product.id === payload.id
      );
      if (index === -1) {
        return {
          ...state,
          products: [...state.products, { ...payload, qty: 1 }],
        };
      } else {
        state.products[index].qty++;
        return state;
      }
    },
  },
};
