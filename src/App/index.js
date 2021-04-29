import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardText,
  CardTitle,
} from 'reactstrap';
import getWeather from '../helpers/data/weatherData';
import './App.scss';

function App() {
  const [userLocation, setUserLocation] = useState({});
  const [forecast, setForecast] = useState('');
  const [icon, setIcon] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setUserLocation((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    getWeather(userLocation.location).then((resp) => {
      if (resp) {
        setForecast(resp.weather[0].description);
        setIcon(resp.weather[0].icon);
        console.warn('forecast', forecast);
      }
    });
  };

  return (
    <div className='App'>
      <Form>
    <FormGroup>
      <Label for="location">Enter Your Location</Label>
      <Input type="text" name="location" id="location" placeholder="Location" onChange={handleInputChange}/>
    </FormGroup>
    <Button color="info" type="submit" onClick={handleSubmit}>Submit</Button>
    </Form>
      <hr/>
      {submitted ? <Card body>
          <CardTitle tag="h5">{userLocation.location}</CardTitle>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
          <CardText>{forecast}</CardText>
        </Card> : ''}
    </div>
  );
}

export default App;
