import { axiosInstance, baseEndpoint } from "./services";


export const apiGetCategorys = async (option={}) => {
    const res = await axiosInstance.get(baseEndpoint.categorys,{
        params:option
    });
    return res.data;
};

export const apiDeleteCategorys = async (id)=>{
    const res = await axiosInstance.delete(baseEndpoint.categorys +'/remove/'+ id)
    return res
}

export const apiAddCategorys = async (data={})=>{
    const res = await axiosInstance.post(baseEndpoint.categorys+'/create',data)
    return res
}

export const apiUpdateCategorys = async (id,post)=>{
  const res = await axiosInstance.put(`${baseEndpoint.categorys}/update/${id}`,post)
  return res
}