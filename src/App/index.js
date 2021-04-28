import React from 'react';
import WeatherForm from '../Components/form';
// import WeatherCard from '../Components/WeatherCard';
import './App.scss';

function App() {
  // const [weather, setWeather]= useState({});
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
