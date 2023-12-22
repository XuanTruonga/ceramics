import { axiosInstance } from "./services";


export const apiGetProducts = async () => {
  try {
    const res = await axiosInstance.get('/product');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const apiDeleteProducts = async (id)=>{
  try {
  const res = await axiosInstance.delete(`/product/${id}`)
  return res
} catch (error) {
  console.log(error)
}
}

export const apiPostProducts = async (post={})=>{
  try {
    const res = await axiosInstance.post('/product',post)
    return res
  } catch (error) {
    console.log(error)
  }
}

export const apiPutProducts = async (id,post)=>{
  const res = await axiosInstance.put(`/product/${id}`,post)
  return res
}