import React, { useState } from 'react';

import './style.css';

function FormCriarConta(props) {
    const [login, setLogin] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConfirmada, setSenhaConfirmada] = useState("");

    return (
        <section className="container .container-sm .container-md .container-lg .container-xl .container-xxl">
            <div className="card text-white mb-3 mt-5">
                <form
                    onSubmit={(event) =>{
                        event.preventDefault();
                        console.log(senhaConfirmada);
                    }} 
                    className="card-body"
                    >
                    <div className="mb-3">
                        <input
                            value={login}
                            onChange={(event) => {
                                setLogin(event.target.value);
                            }}
                            type="text"
                            className="form-control"
                            id="login"
                            placeholder="Login" 
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            value={nome}
                            onChange={(event) => {
                                setNome(event.target.value)
                            }}
                            type="text"
                            className="form-control"
                            id="nome"
                            placeholder="Nome"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value)
                            }}
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="E-mail"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            value={senha}
                            onChange={(event) => {
                                setSenha(event.target.value);
                            }}
                            type="password" 
                            className="form-control" 
                            id="senha" 
                            placeholder="Senha"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            value={senhaConfirmada}
                            onChange={(event) => {
                                setSenhaConfirmada(event.target.value)
                            }}
                            type="password" 
                            className="form-control" 
                            id="confirmaSenha" 
                            placeholder="Confirmar Senha" />
                    </div>

                    <div className="mb-3">
                        <input className="formCriarContaSubmit" type="submit" value="Criar" />
                    </div>

                </form>
            </div>
        </section>
    );
}

export default FormCriarConta;