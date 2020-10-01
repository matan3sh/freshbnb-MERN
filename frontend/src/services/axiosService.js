import axios from 'axios';

class AxiosService {
  axiosInstace = null;

  constructor() {
    this.initInstance();
  }

  initInstance() {
    this.axiosInstace = axios.create({
      baseURL: 'http://localhost:3000/api',
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
