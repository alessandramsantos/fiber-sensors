import React from 'react';
import '../css/Header.css';
import logo from '../images/logo.png';
import menu from '../images/menu.png';

function Header() {

  return (
    <div className="header">
      <div>
        <img src={logo} alt="fiber sensors logo" />
      </div>
      <div className='header-info'>
        <span>Curitiba</span>
      </div>
      <div>
        <img src={menu} alt="barra de menu" />
      </div>
    </div>
  );
}

export default Header;