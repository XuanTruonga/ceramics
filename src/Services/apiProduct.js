import { axiosInstance, baseEndpoint } from './services';

export const apiGetProducts = async (option = {}) => {
  const res = await axiosInstance.get(baseEndpoint.product, {
    params: option
  });
  return res.data;
};

export const apiRemoveProducts = async (id) => {
  const res = await axiosInstance.delete(`${baseEndpoint.product}/remove/${id}`);
  return res;
};

export const apiPostProducts = async (data = {}) => {
  const res = await axiosInstance.post(baseEndpoint.product+'/create', data);
  return res;
};

export const apiUpdateProducts = async (id, data) => {
  const res = await axiosInstance.put(`${baseEndpoint.product}/update/${id}`, data);
  return res;
};
