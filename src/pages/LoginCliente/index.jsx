import React, { useState } from 'react';

import Header from '../../components/Header';
import './style.css';


function LoginCliente() {
    const [login, setLogin] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const [placeHolderLogin] = useState('Login');
    const [placeHolderPassword] = useState('Password');

    async function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <section className="loginCliente">
            <Header />
            <section className="loginCliente_form_container">
                <section className="loginCliente_header">
                    <h2>Cliente Login</h2>
                </section>
                <form
                    className="loginCliente_form "
                    onSubmit={handleSubmit}
                >

                    <input
                        value={login}
                        onChange={(event) => {
                            setLogin(event.target.value);
                        }}
                        type="text"
                        className="loginCliente_input"
                        placeholder={placeHolderLogin}
                    />
                    <input
                        value={userPassword}
                        onChange={(event) => {
                            setUserPassword(event.target.value);
                        }}
                        type="password"
                        className="loginCliente_input"
                        placeholder={placeHolderPassword}
                    />
                    <input type="submit" className="loginCliente_submit loginCliente_input" value="Sign In" />
                </form>
            </section>
        </section>
    );
}

export default LoginCliente;