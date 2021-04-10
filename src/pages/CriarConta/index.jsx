import React, { Fragment } from 'react';

import Header from '../../components/Header';
import EscolhaClienteAgricultor from '../../components/EscolhaClienteAgricultor';

function CriarConta() {
    return(
        <Fragment>
            <Header />
            <EscolhaClienteAgricultor toCliente="/" toAgricultor="/criarContaAgricultor" textoCriar="Criar"/>
        </Fragment>
    );
}

export default CriarConta;