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

export default {
  getByRental,
};
