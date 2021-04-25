import React, { useState } from 'react';
import HeaderLogado from '../../components/HeaderLogado';

import api from '../../services/api';

import './style.css';

function PedidoCliente() {

    const [total] = useState('1.00');

    const [formaPagamento] = useState(1);

    async function handleSubmit(event) {
        event.preventDefault();

        await api.post('pedido', {
            formaPagamento,
            total
        });
    }

    return (
        <section className="pedidoCliente">
            <HeaderLogado />
            <section className="pedidoCliente_container">
                <h1>Meus Pedidos</h1>
                <section className="pedidoCliente_tabela-container">
                    <table className="pedidoCliente_tabela">
                        <thead>
                            <tr>
                                <th>Qtd.</th>
                                <th>Nome</th>
                                <th>Preço</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <DescricaoPedidos
                                quantidade="01"
                                descricao="Banana Prata 500g"
                                preco="5.16"
                            />
                            <DescricaoPedidos
                                quantidade="01"
                                descricao="Limão Tahiti 500g"
                                preco="2.79"
                            />
                            <DescricaoPedidos
                                quantidade="01"
                                descricao="Laranja Pera 500g"
                                preco="1.98"
                            />
                            <DescricaoPedidos
                                quantidade="01"
                                descricao="Maça Fuji 500g"
                                preco="6.00"
                            />
                            <tr className="pedidoCliente_tr_especial">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>{total} R$</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section className="pedidoCliente_button">
                    <form
                        className="pedidoCliente_form"
                        onSubmit={handleSubmit}
                    >
                        <select
                            name="formaPagamento"
                            id="formaPagamento">
                            <option value="1" defaultValue="selected">PicPay</option>
                        </select>
                        <input
                            className="pedidoCliente_submit"
                            type="submit"
                            value="Pagar"
                        />
                    </form>
                </section>
            </section>
        </section>

    );
}

export default PedidoCliente;


function DescricaoPedidos(props) {
    return (
        <tr>
            <td>{props.quantidade}</td>
            <td>{props.descricao}</td>
            <td>{props.preco}R$</td>
        </tr>
    )
}