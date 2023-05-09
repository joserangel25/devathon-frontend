import axios from 'axios';

const LugarAccesibleApi = axios.create({
  baseURL: 'https://devathon-api.azurewebsites.net/',
  // baseURL: 'https://vps-3308549-x.dattaweb.com/', //Me la pasó Anibal por discord como segunda opcion
});

LugarAccesibleApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: 'bearer ' + localStorage.getItem('token'),
  };

  return config;
});

export default LugarAccesibleApi;
