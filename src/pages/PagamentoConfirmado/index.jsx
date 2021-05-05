import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import './style.css';

function PagamentoConfirmado() {
    return (
        <section className="pagamentoConfirmado">
            <section className="pagamentoConfirmado_container">
                <section className="pagamentoConfirmado_titulo">
                    <h1>
                        Pagamento realizado com sucesso :D
                    </h1>
                </section>

                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                    <section className="pagamentoConfimado_logo">
                        <section>
                            <img src={logo} alt="Logo do Agro+" />
                        </section>
                        <p>retornar para tela inicial</p>

                    </section>
                </Link>

            </section>
        </section>
    );
}

export default PagamentoConfirmado;