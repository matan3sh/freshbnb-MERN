import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

const query = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/rentals`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getById = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/rentals/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default {
  query,
  getById,
};
