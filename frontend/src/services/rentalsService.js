import { rentals } from 'data/RentalsDB';

const query = async () => {
  try {
    return await Promise.resolve(rentals);
  } catch (error) {
    console.log(error);
  }
};

const getById = async (id) => {
  try {
    const res = rentals.find((rental) => rental._id === id);
    return Promise.resolve(res);
  } catch (err) {
    console.log(err);
  }
};

export default {
  query,
  getById,
};
