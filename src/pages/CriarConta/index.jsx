import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';


import './style.css';


function CriarConta() {
    return (
        <section className="criarConta">
            <Header />
            <section className="escolhaClienteAgricultor">
                <section className="escolhaClienteAgricultor_box">
                    <h1 className="escolhaClienteAgricultor_titulo-cliente">Sou Cliente</h1>
                    <section>
                        <Link to="/" style={{ textDecoration: 'none', color: '#53DF83' }}>Criar</Link>
                    </section>
                </section>
                <section className="escolhaClienteAgricultor_box">
                    <h1 className="escolhaClienteAgricultor_titulo-agricultor">Sou Agricultor</h1>
                    <section>
                        <Link to="/criarContaAgricultor" style={{ textDecoration: 'none', color: '#53DF83' }}>Criar</Link>
                    </section>
                </section>
            </section>
        </section>
    );
}

export default CriarConta;