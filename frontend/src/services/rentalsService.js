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
  } catch (error) {
    console.log(error);
  }
};

const add = async (rental) => {
  try {
    const res = await axios.post(`${BASE_URL}/rentals`, rental);
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
