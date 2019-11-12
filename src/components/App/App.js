import 'normalize.css';
import './style.scss';
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Card from '../Card/Card';
import openWeather from '../../api/openWeather';
import cityIDs from '../../api/cityIDs';

const App = () => {
  const [hasError, setError] = useState(false);
  const [citiesData, setCitiesData] = useState({});
  
  async function fetchData() {
    await openWeather.get('/group', {
      params: {
        id: cityIDs.toString(),
        units: 'metric',
        appid: process.env.REACT_APP_API_KEY
      }
    })
    .then(response => {
      if (response.status === 200) {
        if (hasError) {
          setError(false);
        }
        
        setCitiesData(response.data.list);
        setLocalStorage(response.data.list);
      } else {
        throw new Error('error');
      }
    })
    .catch(error => !hasError ? setError(error) : null);
  };

  let setLocalStorage = data => {
    localStorage.setItem('@weather-now/cities', JSON.stringify(data));
    localStorage.setItem('@weather-now/citiesDate', Date.now());
  }

  let buildCards = () => {
    if ( cityIDs.length ) {
      return cityIDs.map((city, key) => {
        return <Card key={city}
                     data={citiesData[key]}
                     hasError={hasError}
                     fetchData={fetchData} />
      });
    }
  };

  useEffect(() => {
    const date = localStorage.getItem('@weather-now/citiesDate');
    const citiesDate = date && new Date(parseInt(date));
    const now = new Date();

    const dataAge = Math.round((now - citiesDate) / (1000 * 60));
    const old = dataAge >= 10;

    if (old) {
      fetchData();
    } else {
      localStorage.getItem('@weather-now/cities') && setCitiesData(
        JSON.parse(localStorage.getItem('@weather-now/cities'))
      );
    }
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="content">{ buildCards() }</div>
    </div>
  );
}

export default App;