import React, { Fragment } from 'react';
import Header from '../../components/Header';

import './style.css';

function ConfirmarConta() {
    return(
        <Fragment>
            <Header />
            <section className="confirmarContaMensagem">
                <p className="confirmarConta_titulo ">Enviamos um código para seu e-mail</p>
                <p className="confirmarConta_titulo">Utilize o código para confirmar a criação da conta</p>
            </section>
            <section className="confirmarConta">
                <form action="/" className="confirmaConta_form">
                    <input className="confirmarConta_codigo" type="text" placeholder="Código de Confirmação"/>
                    <input type="submit" value="Confirmar"></input>
                </form>
            </section>
        </Fragment>
    );
}

export default ConfirmarConta;