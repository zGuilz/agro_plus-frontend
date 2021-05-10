import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';
import { AiFillDelete } from 'react-icons/ai';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

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

        setProteina(Number((proteina + success.data.dados.food.nutrients.PROTEÍNA).toFixed(2)));
        setCarboidrato(Number((carboidrato + success.data.dados.food.nutrients.CARBOIDRATO).toFixed(2)));
        setEnergia(Number((energia + success.data.dados.food.nutrients.ENERGIA).toFixed(2)));
        setFibra(Number((fibra + success.data.dados.food.nutrients.FIBRA).toFixed(2)));
        setGordura(Number((gordura + success.data.dados.food.nutrients.GORDURA).toFixed(2)));
        toast.success('Alimento encontrado!');
      })
      .catch((err) => {
        toast.error('Alimento não encontrado!');
      });

    setAlimentoUsuario('');
    setLoading(false);
  }

  function deleteAlimento(aliment) {
    setProteina(Number((proteina - aliment.nutrients.PROTEÍNA).toFixed(2)));
    setCarboidrato(Number((carboidrato - aliment.nutrients.CARBOIDRATO).toFixed(2)));
    setEnergia(Number((energia - aliment.nutrients.ENERGIA).toFixed(2)));
    setFibra(Number((fibra - aliment.nutrients.FIBRA).toFixed(2)));
    setGordura(Number((gordura - aliment.nutrients.GORDURA).toFixed(2)));

    const newAlimentos = alimentos.filter((a) => {
      return a.label !== aliment.label;
    });

    setAlimentos(newAlimentos);
    console.log(gordura);
  }

  return (
    <>
      <Header></Header>
      <section className="calculadora_container-buscar">
        <input
          placeholder="Digite o nome do alimento"
          className="calculadora_input"
          value={alimentoUsuario}
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
                      <td>
                        <button
                          type="button"
                          style={{ border: 0, background: 'none' }}
                          onClick={() => {
                            confirmAlert({
                              customUI: ({ onClose }) => {
                                return (
                                  <div className="custom-ui">
                                    <h1>Deseja deletar esse alimento?</h1>
                                    <p>Você tem certeza?</p>
                                    <button
                                      onClick={() => {
                                        deleteAlimento(alimento);
                                        onClose();
                                      }}
                                    >
                                      Sim, deletar!
                                    </button>
                                    <button onClick={onClose}>Não</button>
                                  </div>
                                );
                              },
                            });
                          }}
                        >
                          <AiFillDelete size={25} color="#FF0000" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <span></span>
              )}
              <tr className="footer-tr">
                <td>
                  <strong>TOTAL</strong>
                </td>
                <td>
                  <strong>{carboidrato > 0 ? carboidrato : 0}g</strong>
                </td>
                <td>
                  <strong>{energia > 0 ? energia : 0}g</strong>
                </td>
                <td>
                  <strong>{fibra > 0 ? fibra : 0}g</strong>
                </td>
                <td>
                  <strong>{gordura > 0 ? gordura : 0}g</strong>
                </td>
                <td>
                  <strong>{proteina > 0 ? proteina : 0}g</strong>
                </td>
                <td />
              </tr>
            </tbody>
          </table>
        )}
      </section>
    </>
  );
}

export default CalculadoraNutricional;
