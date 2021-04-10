import React from 'react';
import logo from '../../assets/logo.png';

import Button from '../Button';

import './style.css';
function Header() {
    return (
        <section className="header">

            <section className="header_img">
                <img className="header_logo" src={logo} alt="Logo da Agro+" />
            </section>
            <section className="header_buttons">
                <Button text="Sing In" to="/"/>
                <Button text="Sing Up" to="/criarConta"/>
            </section>
        </section>
    );
}

export default Header;