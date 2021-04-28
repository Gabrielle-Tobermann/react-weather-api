import React from 'react';
import {
  Card, 
  CardText,
  CardTitle,
  Button
} from 'reactstrap';

export default function WeatherCard({ weather, setWeather }) {
  return (
    <Card body>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
  );
}
