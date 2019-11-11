import 'normalize.css';
import './style.scss';
import React from 'react';
import Header from '../Header/Header';
import Card from '../Card/Card';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Card />
    </div>
  );
}

export default App;