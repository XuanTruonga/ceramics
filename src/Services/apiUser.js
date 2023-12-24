import { axiosInstance } from './services';

export const apiGetUsers = async (option = {}) => {
  try {
    const res = await axiosInstance.get('/auth', {
      params: option
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const apiGetUsersCurrent = async () => {
  const res = await axiosInstance.get('/auth/verify-token');
  return res.data;
};

export const apiRegisterUser = async (data) => {
  const res = await axiosInstance.post('/auth/register', data);
  return res.data;
};

export const apiLockUsers = async (id, data) => {
  const res = await axiosInstance.put(`/auth/lock/${id}`, data);
  return res;
};

export const apiLoginUsers = async (data = {}) => {
  const res = await axiosInstance.post('/auth/login', data);
  return res;
};

export const apiUpdateUsers = async (id, data) => {
  const res = await axiosInstance.put(`/auth/update/${id}`, data);
  return res;
};
