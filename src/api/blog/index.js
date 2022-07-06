import axiosClient from "../../utils/axiosClient";
import { END_POINT } from "../endpoint";

export const getBlogs = (payload) => {
  return axiosClient.get(END_POINT.BLOG, payload);
};
