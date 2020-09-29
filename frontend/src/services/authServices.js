import axios from 'axios';
import { extractApiErrors } from 'helpers/functions';

const BASE_URL = 'http://localhost:3000/api';

export const registerUser = (credentials) =>
  axios
    .post(`${BASE_URL}/users/register`, credentials)
    .catch((error) => Promise.reject(extractApiErrors(error.response || {})));

export const loginUser = (credentials) =>
  axios
    .post(`${BASE_URL}/users/login`, credentials)
    .then((res) => res.data)
    .catch((error) => Promise.reject(extractApiErrors(error.response || {})));
