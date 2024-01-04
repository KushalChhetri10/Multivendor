import axios, { AxiosInstance } from "axios";

const lwpAxios: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 5000,
});

export default lwpAxios;
