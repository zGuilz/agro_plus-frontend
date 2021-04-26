import React, { Fragment } from 'react';
import Header from '../../components/Header';

import logoEmpresa from '../../assets/logoHome.png';


import './style.css';

function Home() {
    return(
        <Fragment>
            <Header />
            <section className="home">
                <section className="home_logoEmpresa">
                    <img src={logoEmpresa} alt="logo da empresa Agro Mais"/>
                </section>
            </section>
        </Fragment>
    ); 
}

export default Home;