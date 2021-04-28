import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import getWeather from '../helpers/data/weatherData';

export default function WeatherForm() {
  const [userLocation, setUserLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    g