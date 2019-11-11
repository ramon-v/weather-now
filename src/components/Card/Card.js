import './style.scss';
import React from 'react';

const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>Urubici, BR</h2>
      </div>
      <div className="temperature">
        <h3>19°</h3>
      </div>
      <div className="card-footer">
        <div className="info">
          <div className="humidity">
            <span>HUMIDITY</span>
            <p>75%</p>
          </div>
          <div className="pressure">
            <span>PRESSURE</span>
            <p>892hPa</p>
          </div>
        </div>
        <p className="last-update">Updated at 20:48:27 PM</p>
      </div>
    </div>
  );
}

export default Card;