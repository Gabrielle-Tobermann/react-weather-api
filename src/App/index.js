import React, { useState } from 'react';
import WeatherCard from '../Components/WeatherCard';
import getWeather from '../helpers/data/weatherData';
import './App.scss';

function App() {
  const [weather, setWeather]= useState({});
  
  useEffect(() => {
    getWeather().then((weatherObj) => console.warn(weatherObj));
  }, []);

  return (
    <div className='App'>
      <WeatherCard
      weather={weather}
      setWeather={setWeather}
    />
    </div>
  );
}

export default App;
