import { useEffect } from "react";
import { request } from "@/services";

export const useRequestInterceptorsRequest = () => {
  useEffect(() => {
    const useId = request.interceptors.request.use((config) => {
      return config;
    }, error => {
      console.log(error);
      return Promise.reject(error);
    });
    return () => {
      request.interceptors.request.eject(useId);
    };
  }, []);
};
