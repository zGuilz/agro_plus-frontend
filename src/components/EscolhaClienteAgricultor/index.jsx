import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


import './style.css';

function EscolhaClienteAgricultor(props) {
    return(
        <Fragment>
            <section className="escolhaClienteAgricultor">
                <section className="escolhaClienteAgricultor_box">
                    <h1 className="escolhaClienteAgricultor_titulo-cliente">Sou Cliente</h1>
                    <section>
                        <Link to={props.toCliente} style={{ textDecoration: 'none', color: '#53DF83'}}>{props.textoCriar}</Link>
                    </section>
                </section>
                <section className="escolhaClienteAgricultor_box">
                    <h1 className="escolhaClienteAgricultor_titulo-agricultor">Sou Agricultor</h1>
                    <section>
                        <Link to={props.toAgricultor} style={{ textDecoration: 'none', color: '#53DF83'}}>{props.textoCriar}</Link>
                    </section>
                </section>
            </section>
        </Fragment>
    );
}

export default EscolhaClienteAgricultor;