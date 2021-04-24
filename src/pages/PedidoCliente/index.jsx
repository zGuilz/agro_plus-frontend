import React, {useState} from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';

import './style.css';

function PedidoCliente() {

    const [total] = useState('15.93');


    return (
        <section className="pedidoCliente">
            <Header />
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
                    <Button text={"Pagar"}/>
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