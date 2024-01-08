import { axiosInstance, baseEndpoint } from "./services"

 export const apiGetNews = async (option)=>{
  const res = await axiosInstance.get(baseEndpoint.news,{
    params:option
  })
  return res
 }

 export const apiRemoveNews = async(id)=>{
  const res = await axiosInstance.delete(baseEndpoint.news+'/remove/'+id)
  return res
 }

 export const apiUpdateNews = async(id,data={})=>{
  const res = await axiosInstance.put(baseEndpoint.news+'/update/'+id,data)
  return res
 }

 export const apiAddNews =  async(data={})=>{
  const res = await axiosInstance.post(baseEndpoint.news+'/create',data)
  return res
 }