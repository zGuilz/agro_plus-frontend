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
          <div className="button-container">
            <strong className="button-intro">Acesse nossa</strong>
            <Button
              to="/calculadora"
              text="Calculadora"
              className="button-calc"
            />
          </div>
        </section>
      </section>
    </Fragment>
  );
}

export default Home;
