import React, { Fragment } from 'react';

import Header from '../../components/Header';
import FormCriarConta from '../../components/FormCriarConta';

import './style.css';

function CriarContaAgricultor() {
    return (
        <Fragment>
            <Header />
            <section className="criarContaAgricultor">
                <h1 className="criarContaAgricultor_header_um">Criar Conta</h1>
                <h1 className="criarContaAgricultor_header_dois">Agricultor</h1>
            </section>
            <FormCriarConta to="/criarContaAgricultor" />
        </Fragment>
    );
}

export default CriarContaAgricultor;