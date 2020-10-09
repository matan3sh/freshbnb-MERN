import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? '/api/' : '/api/';

class AxiosService {
  axiosInstace = null;

  constructor() {
    this.initInstance();
  }

  initInstance() {
    this.axiosInstace = axios.create({
      baseURL,
      timeout: 5000,
    });
    this.axiosInstace.interceptors.request.use((config) => {
      const token = localStorage.getItem('freshbnb_token');
      if (token) config.headers.Authorization = `Berear ${token}`;
      return config;
    });
  }

  get freshbnbAxios() {
    return this.axiosInstace;
  }
}

export default new AxiosService();
