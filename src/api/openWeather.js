import axios from 'axios';

export default axios.create({
  baseURL: 'api.openweathermap.org/data/2.5/weather',
  params: {
    appid: process.env.API_KEY
  }
});