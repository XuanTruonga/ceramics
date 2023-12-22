import axios from 'axios';
import { services } from './services';

// const axiosInstance = axios.create({
//   baseURL: process.env.REACT_APP_BASE_URL,
//   headers: {
//     Authorization: 'Bearer' + 'token'
//   }
// });

export const apiGetProvices = async () => {
  try {
    const res = await axios.get('https://vapi.vnappmob.com/api/province/');
    return res.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const apiGetDistrict = async (idProvices) => {
  try {
    const res = await axios.get(`https://vapi.vnappmob.com/api/province/district/${idProvices}`);
    return res.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const apiGetWard = async (idDistrict) => {
  try {
    const res = await axios.get(`https://vapi.vnappmob.com/api/province/ward/${idDistrict}`);
    return res.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const apiGetAccountAdmin = async () => {
  try {
    const res = await axios.get('http://localhost:5000/accountAdmin');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
