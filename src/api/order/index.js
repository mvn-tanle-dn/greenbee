import axiosClient from "../../utils/axiosClient";
import { END_POINT } from "../endpoint";

export const getOrders = () => {
  return axiosClient.get(END_POINT.ORDERS);
};

export const postOrders = (payload) => {
  return axiosClient.post(END_POINT.ORDERS, payload);
};

export const postOrdersWithVnPay = (payload) => {
  return axiosClient.post(END_POINT.ORDERSVNPAY, payload);
};
