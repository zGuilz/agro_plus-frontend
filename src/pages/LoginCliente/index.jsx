import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';

import api from '../../services/api';
import { logar } from '../../services/auth';
import FacebookLogin from 'react-facebook-login';

import './style.css';

function LoginCliente() {
  const history = useHistory();

  const [login, setLogin] = useState('');
  const [senha, setUserPassword] = useState('');

  const [placeHolderLogin] = useState('Login');
  const [placeHolderPassword] = useState('Password');

  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    await api
      .post('login', {
        login,
        senha,
      })
      .then((success) => {
        console.log(success.data.dados.token);
        logar(success.data.dados.token);
        history.push('/pedidoCliente');
      })
      .catch((error) => {
        setError('Houve um problema com o login.');
      });
  }

  function responseFacebook(event){
    console.log(event)
  }

  return (
    <section className="loginCliente">
      <Header />
      <section className="loginCliente_form_container">
        <section className="loginCliente_header">
          <h2>Cliente Login</h2>
        </section>
        {error && <p className="error-msg">{error}</p>}
        <section className="loginCliente_formCSS">
          <form className="loginCliente_form" onSubmit={handleSubmit}>
            <input
              value={login}
              onChange={(event) => {
                setLogin(event.target.value);
              }}
              type="text"
              className="loginCliente_input"
              placeholder={placeHolderLogin}
            />
            <input
              value={senha}
              onChange={(event) => {
                setUserPassword(event.target.value);
              }}
              type="password"
              className="loginCliente_input"
              placeholder={placeHolderPassword}
            />
            <input
              type="submit"
              className="loginCliente_submit loginCliente_input"
              value="Sign In"
            />
          </form>
          <FacebookLogin
              appId="965249564211934"
              autoLoad={true}
              fields="name,email,picture"
              callback={responseFacebook}
              icon="fa-facebook" />
        </section>
      </section>
    </section>
  );
}

export default LoginCliente;
