import axiosService from './axiosService';
const { freshbnbAxios } = axiosService;

export const uploadImage = (image) => {
  const formData = new FormData();
  formData.append('image', image);
  return freshbnbAxios.post('/image-upload', formData).then((res) => res.data);
};
