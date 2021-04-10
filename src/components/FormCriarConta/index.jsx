import React from 'react';
import Button from '../Button';

import './style.css';

function FormCriarConta(props) {
    return (
        <section class="container .container-sm .container-md .container-lg .container-xl .container-xxl">
            <div class="card text-white mb-3 mt-5">
                <form class="card-body">
                    <div className="mb-3">
                        <input type="text" class="form-control" id="login"placeholder="Login" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="nome"placeholder="Nome" />
                    </div>

                    <div className="mb-3">
                        <input type="email" className="form-control" id="email" placeholder="E-mail" />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="senha" placeholder="Senha" />
                    </div>

                    <div className="mb-3">
                        <input type="password" className="form-control" id="confirmaSenha" placeholder="Confirmar Senha" />
                    </div>

                    <div className="mb-3">
                        <Button to={props.to} text="Criar"/>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default FormCriarConta;