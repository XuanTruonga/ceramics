import { axiosInstance } from "./services";

// http://localhost:5001/api/category

export const apiGetCategorys = async () => {
  try {
    const res = await axiosInstance.get('/categorys');
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const apiDeleteCategorys = async (id)=>{
  try {
    const res = await axiosInstance.delete(`/categorys/${id}`)
    return res
  } catch (error) {
    console.log(error)
  }
}

export const apiPostCategorys = async (post={})=>{
  try {
    const res = await axiosInstance.post('/categorys')
    return res
  } catch (error) {
    console.log(error)
  }
}

export const apiPutCategorys = async (id,post)=>{
  const res = await axiosInstance.put(`/categorys/${id}`,post)
  return res
}