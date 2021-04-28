import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import getWeather from '../helpers/data/weatherData';

export default function weatherForm() {
  const [userLocation, setUserLocation] = useState({});
  const handleInputChange = (e) => {
    setUserLocation((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(userLocation.location).then((resp) => console.warn(resp));
  };

  return (
    <Form>
    <FormGroup>
      <Label for="location">Enter Your Location</Label>
      <Input type="text" name="location" id="location" placeholder="Location" onChange={handleInputChange}/>
    </FormGroup>
    <Button color="info" type="submit" onClick={handleSubmit}>Submit</Button>
    </Form>
  );
}
