import { extractApiErrors } from 'helpers/functions';
import axiosService from './axiosService';
const { freshbnbAxios } = axiosService;

const add = async (booking) => {
  try {
    const res = await freshbnbAxios.post('/bookings', booking);
    return res.data;
  } catch (error) {
    Promise.reject(extractApiErrors(error.response || {}));
  }
};

export default {
  add,
};
