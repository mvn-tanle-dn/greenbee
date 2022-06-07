import axiosClient from "../../utils/axiosClient";
import { END_POINT } from "../endpoint";

export const login = async (payload) => {
  return axiosClient.post(END_POINT.LOGIN, payload);
};
