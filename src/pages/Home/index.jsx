import React, { Fragment } from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';

import logoEmpresa from '../../assets/logoHome.png';

import './style.css';

function Home() {
  return (
    <Fragment>
      <Header />
      <section className="home">
        <section className="home_logoEmpresa">
          <img src={logoEmpresa} alt="logo da empresa Agro Mais" />
        </section>
        <Button to="/calculadora" text="Calculadora" />
      </section>
    </Fragment>
  );
}

export default Home;
