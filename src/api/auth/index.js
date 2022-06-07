import http from "../../utils/http";
import { END_POINT } from "../endpoint";

export const login = (payload) => {
  return http.post(END_POINT.LOGIN, payload);
};
