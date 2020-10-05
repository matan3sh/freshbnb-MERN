import { extractApiErrors } from 'helpers/functions';
import axiosService from './axiosService';
const { freshbnbAxios } = axiosService;

const add = async (booking) => {
  try {
    const res = await freshbnbAxios.post('/bookings', booking);
    return res.data;
  } catch (error) {
    return Promise.reject(extractApiErrors(error.response || {}));
  }
};

const getByRental = async (rentalId) => {
  try {
    const res = await freshbnbAxios.get(`/bookings?rental=${rentalId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  add,
  getByRental,
};
