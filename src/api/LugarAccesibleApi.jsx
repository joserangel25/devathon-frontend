import axios from 'axios';

const LugarAccesibleApi = axios.create({
  baseURL: 'https://devathon-api.azurewebsites.net/',
});

LugarAccesibleApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: 'bearer ' + localStorage.getItem('token'),
  };

  return config;
});

export default LugarAccesibleApi;
