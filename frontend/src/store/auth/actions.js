import authServices from 'services/authServices';

export const registerUser = async (credentials) => {
  try {
    // await authServices.register(credentials);
    // return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
