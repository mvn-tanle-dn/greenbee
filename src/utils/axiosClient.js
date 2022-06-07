import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
  timeout: 30000,
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axios.interceptors.response.use(
  async (response) => {
    if (response && response.data) {
      return response.data;
    }
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
