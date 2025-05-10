import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { BASE_URL } from "./apiConfig";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para inyectar token en cada petición
api.interceptors.request.use(async config => {
  const token = await SecureStore.getItemAsync("userToken");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
