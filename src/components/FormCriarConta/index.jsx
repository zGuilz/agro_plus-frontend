import React, { useState } from 'react';
import Recaptcha from 'react-recaptcha';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import './style.css';

function FormCriarConta(props) {
  const history = useHistory();

  const [login, setLogin] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConfirmada, setSenhaConfirmada] = useState('');

  const [recaptchaVerificado, setRecaptchaVerificado] = useState(false);

  const onloadCallback = () => {
    console.log('recaptcha foi carregado');
  };

  const verifyCallback = (response) => {
    if (response) {
      setRecaptchaVerificado(true);
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();

    if (senha !== senhaConfirmada) {
      alert('As senhas não conferem!');
    }

    if (!recaptchaVerificado) {
      alert('Pare, prove que você não é um robo!');
    }

    await api.post('agricultor', {
      login,
      nome,
      email,
      senha,
    });

    history.push('/');
  }

  return (
    <section className="container .container-sm .container-md .container-lg .container-xl .container-xxl">
      <div className="card text-white mb-3 mt-5">
        <form
          onSubmit={handleSubmit}
          className="card-body"
          id="form-agricultor"
        >
          <div className="mb-3">
            <input
              value={login}
              onChange={(event) => {
                setLogin(event.target.value);
              }}
              type="text"
              className="form-control"
              id="login"
              placeholder="Login"
              required
            />
          </div>
          <div className="mb-3">
            <input
              value={nome}
              onChange={(event) => {
                setNome(event.target.value);
              }}
              type="text"
              className="form-control"
              id="nome"
              placeholder="Nome"
              required
            />
          </div>
          <div className="mb-3">
            <input
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              type="email"
              className="form-control"
              id="email"
              placeholder="E-mail"
              required
            />
          </div>
          <div className="mb-3">
            <input
              value={senha}
              onChange={(event) => {
                setSenha(event.target.value);
              }}
              type="password"
              className="form-control"
              id="senha"
              placeholder="Senha"
              required
            />
          </div>
          <div className="mb-3">
            <input
              value={senhaConfirmada}
              onChange={(event) => {
                setSenhaConfirmada(event.target.value);
              }}
              type="password"
              className="form-control"
              id="confirmaSenha"
              placeholder="Confirmar Senha"
              required
            />
          </div>
          <div className="mb-3 formCriarContaRecaptcha">
            <Recaptcha
              sitekey="6LepmaUaAAAAAO2a852MonsGvQ1HVVhxSzm2qINy"
              render="explicit"
              verifyCallback={verifyCallback}
              onloadCallback={onloadCallback}
            />
            <input
              className="formCriarContaSubmit g-recaptcha"
              type="submit"
              value="Criar"
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default FormCriarConta;
