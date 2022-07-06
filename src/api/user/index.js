import axiosClient from "../../utils/axiosClient";
import { END_POINT } from "../endpoint";

export const getProfile = () => {
  return axiosClient.get(END_POINT.PROFILE);
};

export const updateProfile = (payload) => {
  return axiosClient.post(END_POINT.UPDADTEPROFILE, payload);
};

export const getWishList = () => {
  return axiosClient.get(END_POINT.WISHLIST);
};

export const addWishList = (productId) => {
  return axiosClient.get(`${END_POINT.WISHLIST}/${productId}`);
};
