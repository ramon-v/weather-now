import './style.scss';
import React from 'react';
import Logo from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={Logo} />
    </div>
  );
}

export default Header;