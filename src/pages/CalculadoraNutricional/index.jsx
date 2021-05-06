import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';

import Header from '../../components/Header';

import api from '../../services/api';

import './style.css';

function CalculadoraNutricional() {
  const [alimentoUsuario, setAlimentoUsuario] = useState('');
  const [alimentos, setAlimentos] = useState([]);

  const [proteina, setProteina] = useState(0);
  const [carboidrato, setCarboidrato] = useState(0);
  const [energia, setEnergia] = useState(0);
  const [fibra, setFibra] = useState(0);
  const [gordura, setGordura] = useState(0);

  const [loading, setLoading] = useState(false);

  async function handleApi(event) {
    event.preventDefault();

    setLoading(true);

    await api
      .get(`alimento/${alimentoUsuario}`)
      .then((success) => {
        setAlimentos([...alimentos, success.data.dados.food]);

        setProteina(
          Math.round(proteina + success.data.dados.food.nutrients.PROTEÍNA),
        );
        setCarboidrato(
          Math.round(
            carboidrato + success.data.dados.food.nutrients.CARBOIDRATO,
          ),
        );
        setEnergia(
          Math.round(energia + success.data.dados.food.nutrients.ENERGIA),
        );
        setFibra(Math.round(fibra + success.data.dados.food.nutrients.FIBRA));
        setGordura(
          Math.round(gordura + success.data.dados.food.nutrients.GORDURA),
        );
        toast.success('Alimento encontrado!');
      })
      .catch((err) => {
        toast.error('Alimento não encontrado!');
      });

    setLoading(false);
  }

  return (
    <>
      <Header></Header>
      <section className="calculadora_container-buscar">
        <input
          placeholder="Digite o nome do alimento"
          className="calculadora_input"
          onChange={(event) => setAlimentoUsuario(event.target.value)}
        ></input>
        <button type="button" className="button" onClick={handleApi}>
          Buscar
        </button>
      </section>
      <section className="container">
        {loading ? (
          <div className="loading-container">
            <ReactLoading
              type={'bars'}
              color={'#53DF83'}
              height={660}
              width={375}
            />
          </div>
        ) : (
          <table className="product-table">
            <thead>
              <tr>
                <th />
                <th>CARBOIDRATO</th>
                <th>ENERGIA</th>
                <th>FIBRA</th>
                <th>GORDURA</th>
                <th>PROTEÍNA</th>
              </tr>
            </thead>
            <tbody>
              {alimentos ? (
                alimentos.map((alimento) => {
                  return (
                    <tr key={alimento.foodId}>
                      <td>
                        <img src={alimento.image} alt={alimento.label} />
                      </td>
                      <td>
                        <strong>{alimento.nutrients.CARBOIDRATO}</strong>
                      </td>
                      <td>
                        <strong>{alimento.nutrients.ENERGIA}</strong>
                      </td>
                      <td>
                        <strong>{alimento.nutrients.FIBRA}</strong>
                      </td>
                      <td>
                        <strong>{alimento.nutrients.GORDURA}</strong>
                      </td>
                      <td>
                        <strong>{alimento.nutrients.PROTEÍNA}</strong>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <span></span>
              )}
              <tr className="footer-table">
                <td>
                  <strong>TOTAL</strong>
                </td>
                <td>
                  <strong>{carboidrato}</strong>
                </td>
                <td>
                  <strong>{energia}</strong>
                </td>
                <td>
                  <strong>{fibra}</strong>
                </td>
                <td>
                  <strong>{gordura}</strong>
                </td>
                <td>
                  <strong>{proteina}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </section>
    </>
  );
}

export default CalculadoraNutricional;
