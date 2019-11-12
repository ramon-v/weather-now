import 'normalize.css';
import './style.scss';
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Card from '../Card/Card';
import openWeather from '../../api/openWeather';

const App = () => {
  const [weather, setWeather] = useState(0);

  async function fetchData() {
    const response = await openWeather.get('/group', {
      params: {
        id: '3445709,3421319,184745',
        appid: process.env.REACT_APP_API_KEY
      }
    })
    .catch(err => console.log(`error ${err}`));

    console.log(response.data.list)
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div className="app">
      <Header />
      <div className="content">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;