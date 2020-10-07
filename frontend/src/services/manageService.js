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

export default {
  queryRentals,
  queryBookings,
  queryRecievedBookings,
};
