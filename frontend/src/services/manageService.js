import axiosService from './axiosService';
const { freshbnbAxios } = axiosService;

const query = async () => {
  try {
    const res = await freshbnbAxios.get('/rentals/me');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  query,
};
