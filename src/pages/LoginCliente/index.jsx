import React from 'react';

import Header from '../../components/Header';
import './style.css';


function LoginCliente() {


    return (
        <section className="loginCliente">
            <Header />
            <section className="loginCliente_form_container">
                <section className="loginCliente_header">
                    <h2>Cliente Login</h2>
                </section>
                <form className="loginCliente_form loginCliente_input">
                   
                    <input type="text" className="loginCliente_input"/>
                    <input type="password" className="loginCliente_input"/>
                    <input type="submit" className="loginCliente_submit loginCliente_input" value="Sign In"/>
                </form>
            </section>
        </section>
    );
}

export default LoginCliente;