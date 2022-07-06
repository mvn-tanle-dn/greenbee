import { getCategories } from "../api/category";

export const category = {
  state: [],
  reducers: {
    setCategory(state, payload) {
      state = payload;
      return state;
    },
  },
  effects: (dispatch) => ({
    async getCategories() {
      try {
        const res = await getCategories();
        dispatch.category.setCategory(res.data.data);
      } catch (err) {}
    },
  }),
};
