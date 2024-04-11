import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const api = axios.create({
  baseURL: "http://localhost:8081/api/v1/",
});

const AuthInterceptor = () => {
  const token = useSelector((state) => state.auth?.token);

  useEffect(() => {
    if (token) {
      const requestInterceptor = api.interceptors.request.use(
        (config) => {
          config.headers.Authorization = `Bearer ${token}`;
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
      return () => {
        api.interceptors.request.eject(requestInterceptor);
      };
    }
  }, [token]);

  return null;
};

export default AuthInterceptor;
