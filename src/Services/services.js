/* eslint-disable no-useless-concat */
import axios from 'axios';

const dataUser = JSON.parse(localStorage.getItem('token')) || {};

export const baseEndpoint = {
  categorys: '/category',
  product: '/product',
  bill: '/bill',
  users: '/users',
  accountAdmin: '/accountAdmin',
  news: '/news'
};

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${dataUser.token}`
  }
});
