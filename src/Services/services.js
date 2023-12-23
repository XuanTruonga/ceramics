/* eslint-disable no-useless-concat */
import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;
const dataUser = JSON.parse(localStorage.getItem("token")) || {}

export const services = {
  categorys: baseUrl + '/category',
  product: baseUrl + '/product',
  orders: baseUrl + '/orders',
  users: baseUrl + '/users',
  accountAdmin: baseUrl + '/accountAdmin'
};

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${dataUser.token}` 
  }
})
 