import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

import './style.css';
function HeaderLogado() {
    return (
        <section className="headerLogado">

            <section className="headerLogado_img">
                <Link to="/"><img className="headerLogado_logo" src={logo} alt="Logo da Agro+" /></Link>
            </section>
            <section className="headerLogado_marca">
                <h1>Agro</h1>
                <p className="headerLogado_mais">+</p>
            </section>
        </section>
    );
}

export default HeaderLogado;