import React, { useEffect } from 'react';
import WeatherForm from '../Components/form';
// import WeatherCard from '../Components/WeatherCard';
import getWeather from '../helpers/data/weatherData';
import './App.scss';

function App() {
  // const [weather, setWeather]= useState({});
  useEffect(() => {
    getWeather().then((weatherObj) => console.warn(weatherObj));
  }, []);

  return (
    <div className='App'>
      <WeatherForm />
      {/* <WeatherCard
      weather={weather}
      setWeather={setWeather}
    /> */}
    </div>
  );
}

export default App;
