import { getProfile, updateProfile } from "../api/user";

export const profile = {
  state: {},
  reducers: {
    setProfile(state, payload) {
      state = payload;
      return state;
    },
  },
  effects: (dispatch) => ({
    async getProfile() {
      try {
        const res = await getProfile();
        dispatch.profile.setProfile(res.data);
      } catch (err) {}
    },
    async updateProfile(payload) {
      try {
        const res = await updateProfile(payload);
        dispatch.profile.setProfile(res.data);
      } catch (err) {}
    },
  }),
};
