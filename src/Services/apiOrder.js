import { axiosInstance, baseEndpoint } from "./services";


export const apiGetBill = async (option={}) => {
    const res = await axiosInstance.get(baseEndpoint.bill,{
        params:option
    });
    return res.data;
};

export const apiDeleteBill = async (id)=>{
    const res = await axiosInstance.delete(baseEndpoint.bill +'/remove/'+ id)
    return res
}

export const apiAddBill = async (data={})=>{
    const res = await axiosInstance.post(baseEndpoint.bill+'/create',data)
    return res
}

// export const apiUpdateCategorys = async (id,post)=>{
//   const res = await axiosInstance.put(`${baseEndpoint.categorys}/update/${id}`,post)
//   return res
// }