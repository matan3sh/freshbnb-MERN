import { extractApiErrors } from 'helpers/functions';
import axiosService from './axiosService';
const { freshbnbAxios } = axiosService;

const queryRentals = async () => {
  try {
    const res = await freshbnbAxios.get('/rentals/me');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const queryBookings = async () => {
  try {
    const res = await freshbnbAxios.get('/bookings/me');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const queryRecievedBookings = async () => {
  try {
    const res = await freshbnbAxios.get('/bookings/received');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteRental = async (rentalId) => {
  try {
    const res = await freshbnbAxios.delete(`/rentals/${rentalId}`);
    return res.data;
  } catch (error) {
    return Promise.reject(extractApiErrors(error.response || {}));
  }
};

const deleteBooking = async (bookingId) => {
  try {
    const res = await freshbnbAxios.delete(`/bookings/${bookingId}`);
    return res.data;
  } catch (error) {
    return Promise.reject(extractApiErrors(error.response || {}));
  }
};

const updateRental = async (rental, rentalId) => {
  try {
    const res = await freshbnbAxios.patch(`/rentals/${rentalId}`, rental);
    return res.data;
  } catch (error) {
    return Promise.reject(extractApiErrors(error.response || {}));
  }
};

export default {
  queryRentals,
  queryBookings,
  queryRecievedBookings,
  deleteRental,
  deleteBooking,
  updateRental,
};
