import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

import Button from '../Button';

import './style.css';
function Header() {
  return (
    <section className="header">
      <section className="header_img">
        <Link to="/">
          <img className="header_logo" src={logo} alt="Logo da Agro+" />
        </Link>
      </section>
      <section className="header_buttons">
        <Button text="Sign In" to="/loginCliente" className="button-sign-in" />
        <Button text="Sign Up" to="/criarConta" />
      </section>
    </section>
  );
}

export default Header;
