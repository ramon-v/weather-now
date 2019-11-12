import './style.scss';
import React from 'react';

const TryAgain = (props) => {
  return (
    <div className="try-again">
      <p>Something went wrong</p>
      <button onClick={ props.fetchData }>Try Again</button>
    </div>
  )
}

export default TryAgain;