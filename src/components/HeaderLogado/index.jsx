import React from 'react';
import logo from '../../assets/logo.png';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../../services/auth';

import './style.css';

function HeaderLogado() {
  const history = useHistory();

  function handleLogout() {
    logout();
    history.push('/');
  }
  return (
    <section className="headerLogado">
      <section className="headerLogado_img">
        <Link to="/">
          <img className="headerLogado_logo" src={logo} alt="Logo da Agro+" />
        </Link>
      </section>
      <section className="headerLogado_marca">
        <h1>Agro</h1>
        <p className="headerLogado_mais">+</p>
      </section>
      <button className="sair-button" type="button" onClick={handleLogout}>
        Logout
      </button>
    </section>
  );
}

export default HeaderLogado;
