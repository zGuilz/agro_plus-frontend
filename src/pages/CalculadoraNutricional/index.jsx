import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';

import Header from '../../components/Header';

import api from '../../services/api';

import './style.css';




function CalculadoraNutricional(){
    const [alimento, setAlimento] = useState("")
    const [alimentoInfo, setAlimentoInfo] = useState("")


    useEffect(() => {
        api.get(`alimento/${alimento}` 
            ).then(sucess => {
                setAlimentoInfo(sucess.data.dados.food)
                console.log(alimentoInfo)
            }).catch(error => {
                console.log(error);
                alert(error)
            }
            );
    }, [alimento])

    // async function handleApi(event) {
    //     event.preventDefault();
    
    //     await api.get(`alimento/${alimento}`, {

    //     }).then(sucess => {
    //         setAlimentoInfo(sucess.data.dados.food)
    //         console.log(alimentoInfo)
    //     }).catch(error => {
    //         console.log(error);
    //         alert(error)
    //     }
    //     );
    // }



    return(<>
        <Header></Header>
        <section className="calculadora_container-buscar">
            <input 
            placeholder="Digite o nome do alimento"
            className="calculadora_input"
            onChange={event => setAlimento(event.target.value)}>
            </input>
            <button 
                type="button"
                className="button"
            >Buscar
            </button>
        </section>
        <section>
        <table className="product-table">
          <thead>
            <tr>
              <th />
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>
                    IMG
                </td>
                <td>
                  <strong>TITULO</strong>
                  <span>TEST</span>
                </td>
                <td>
                  <div>
                    TEST1
                  </div>
                </td>
                <td>
                  <strong>Test</strong>
                </td>
                <td>
                </td>
              </tr>
          </tbody>
        </table>
        </section>
    </>)
}

export default CalculadoraNutricional;