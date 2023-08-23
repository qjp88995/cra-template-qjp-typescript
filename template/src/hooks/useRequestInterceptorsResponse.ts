import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { request } from '@/services';

export const useRequestInterceptorsResponse = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const useId = request.interceptors.response.use(
      (res) => res.data,
      (error) => {
        if (error.response.status === 401) {
          navigate('/');
        } else {
          const data = error.response.data;
          const text = data?.message || data?.msg || error.message;
          message.error(text);
        }
        return Promise.reject(error);
      }
    );
    return () => {
      request.interceptors.response.eject(useId);
    };
  }, [navigate]);
};
