export const cart = {
  state: {
    quantity: 0,
    products: [],
  },
  reducers: {
    setQuantityCart(state, payload) {
      state.quantity = payload;
      return state;
    },
  },
};
