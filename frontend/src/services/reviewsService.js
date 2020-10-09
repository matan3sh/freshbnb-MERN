import axiosService from './axiosService';
const { freshbnbAxios } = axiosService;

const getByRental = async (rentalId) => {
  try {
    const res = await freshbnbAxios.get(`/reviews/${rentalId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const add = async (review) => {
  try {
    const res = await freshbnbAxios.post('/reviews', review);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  getByRental,
  add,
};
