import { getBlogs } from "../api/blog";

export const blog = {
  state: [],
  reducers: {
    setBlog(state, payload) {
      state = payload;
      return state;
    },
  },
  effects: (dispatch) => ({
    async getBlogs() {
      try {
        const res = await getBlogs();
        dispatch.blog.setBlog(res.data.data);
      } catch (err) {}
    },
  }),
};
