import axiosClient from "../../utils/axiosClient";
import { END_POINT } from "../endpoint";

export const postOrders = (payload) => {
  return axiosClient.post(END_POINT.ORDERS, payload);
};

export const postOrdersWithVnPay = (payload) => {
  return axiosClient.post(END_POINT.ORDERSVNPAY, payload);
};
