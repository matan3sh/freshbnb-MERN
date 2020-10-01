import { extractApiErrors } from 'helpers/functions';
import axiosService from './axiosService';
const { freshbnbAxios } = axiosService;

export const registerUser = (credentials) =>
  freshbnbAxios
    .post(`/users/register`, credentials)
    .catch((error) => Promise.reject(extractApiErrors(error.response || {})));

export const loginUser = (credentials) =>
  freshbnbAxios
    .post(`/users/login`, credentials)
    .then((res) => res.data)
    .catch((error) => Promise.reject(extractApiErrors(error.response || {})));
