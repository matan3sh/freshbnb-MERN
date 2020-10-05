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

const getByRental = async (rental) => {
  try {
    const res = await freshbnbAxios.get(`/bookings?rental=${rental}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  add,
  getByRental,
};
