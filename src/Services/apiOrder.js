import { axiosInstance } from "./services";

export const apiGetOrder = async () => {
  try {
    const res = await axiosInstance.get('/orders');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const apiDeleteOrders = async (id)=>{
  try {
  const res = await axiosInstance.delete(`/orders/${id}`)
  return res
} catch (error) {
  console.log(error)
}
}

export const apiPostOrders = async (post={})=>{
  try {
    const res = await axiosInstance.post('/orders',post)
    return res
  } catch (error) {
    console.log(error)
  }
}

export const apiPutOrders = async (id,post)=>{
  const res = await axiosInstance.put(`/orders/${id}`,post)
  return res
}