import { getProducts } from "../api/product";

export const product = {
  state: null,
  reducers: {
    setProduct(state, payload) {
      state = payload;
      return state;
    },
  },
  effects: (dispatch) => ({
    async getProducts() {
      try {
        const res = await getProducts();
        dispatch.product.setProduct(res.data.data);
      } catch (err) {}
    },
  }),
};
