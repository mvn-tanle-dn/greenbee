import axiosClient from "../../utils/axiosClient";
import { END_POINT } from "../endpoint";

export const getProducts = () => {
  return axiosClient.get(END_POINT.PRODUCTS);
};

export const getProductsByCategory = (categoryId) => {
  return axiosClient.get(`${END_POINT.CATEGORIES}/${categoryId}`);
};

export const getProductComments = (productId) => {
  return axiosClient.get(`${END_POINT.COMMENTS}/${productId}`);
};
