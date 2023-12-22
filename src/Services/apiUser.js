import { axiosInstance } from "./services";

export const apiGetUsers = async () => {
  try {
    const res = await axiosInstance.get('/auth');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const apiGetUsersCurrent = async () => {
  try {
    const res = await axiosInstance.get('/auth/verify-token');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const apiRegisterUser = async (post) => {
  try {
    const res = await axiosInstance.post('/auth/register',post);
    return res.data;
  } catch (error) {
    console.log(error.response.data);
  }
};

export const apiDeleteUsers = async (id)=>{
  try {
  const res = await axiosInstance.delete(`/auth`,id)
  return res
} catch (error) {
  console.log(error)
}
}

export const apiLoginUsers = async (post={})=>{
  try {
    const res = await axiosInstance.post('/auth/login',post)
    return res
  } catch (error) {
    console.log(error.response.data.message)
  }
}

export const apiLockUsers = async (id,post)=>{
  const res = await axiosInstance.put(`/auth/lock/${id}`,post)
  return res
}