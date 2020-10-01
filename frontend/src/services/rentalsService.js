import axiosService from './axiosService';
const { freshbnbAxios } = axiosService;

const query = async () => {
  try {
    const res = await freshbnbAxios.get(`/rentals`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getById = async (id) => {
  try {
    const res = await freshbnbAxios.get(`/rentals/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const add = async (rental) => {
  try {
    const res = await freshbnbAxios.post('/rentals', rental);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  query,
  getById,
  add,
};
