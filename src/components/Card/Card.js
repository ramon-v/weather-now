import './style.scss';
import React from 'react';
import Loader from '../Utils/Loader/Loader';
import TryAgain from '../Utils/TryAgain/TryAgain';

const Card = (props) => {
  const { data } = props;
  
  const displayCelsius = () => {
    let celsius = parseInt(data.main.temp);
    let temperatureClass;

    if (celsius <= 5) {
      temperatureClass = 'cold';
    }
    
    if (celsius > 25) {
      temperatureClass = 'hot';
    }

    return <h3 className={ temperatureClass ? temperatureClass : null }>{celsius}<sup>°</sup></h3>;
  };

  const displayContent = () => {
    if (props.hasError) {
      return <TryAgain fetchData={props.fetchData} />
    }

    return (
      <>
        <div className="card-header">
          <h2>{props.data ? `${data.name}, ${data.sys.country}` : 'Loading...'}</h2>
        </div>
        <div className="temperature">
          {props.data ? displayCelsius() : <Loader />}
        </div>
        {props.data ?
          <div className="card-footer">
            <div className="info">
              <div className="humidity">
                <span>HUMIDITY</span>
                <p>{data.main.humidity}<small>%</small></p>
              </div>
              <div className="pressure">
                <span>PRESSURE</span>
                <p>{data.main.pressure}<small>hPa</small></p>
              </div>
            </div>
            <p className="last-update">Updated at 20:48:27 PM</p>
          </div> :
          null
        }
      </>
    )
  }

  return <div className="card">{displayContent()}</div>;
}

export default Card;