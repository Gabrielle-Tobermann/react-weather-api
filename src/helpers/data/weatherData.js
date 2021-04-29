import axios from 'axios';
import firebaseConfig from '../apiKeys';

const weatherKey = firebaseConfig.apiKey;

const getWeather = (location) => new Promise((resolve, reject) => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherKey}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getWeather;
