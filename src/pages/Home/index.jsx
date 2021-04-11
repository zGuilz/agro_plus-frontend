import React, { Fragment } from 'react';
import Header from '../../components/Header';

import logoEmpresa from '../../assets/logoHome.png';
import alface from '../../assets/ellipse_alface.png';
import banana from '../../assets/ellipse_banana.png';
import beterraba from '../../assets/ellipse_beterraba.png';
import laranja from '../../assets/ellipse_laranja.png';
import melancia from '../../assets/ellipse_melancia.png';
import pimentao from '../../assets/ellipse_pimentao.png';

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
            <section className="home_banner">
                <BannerFrutas logo={alface} alt="Banner mostrando um Alface"/>
                <BannerFrutas logo={banana}/>
                <BannerFrutas logo={beterraba}/>
                <BannerFrutas logo={laranja}/>
                <BannerFrutas logo={melancia}/>
                <BannerFrutas logo={pimentao}/>

            </section>
        </Fragment>
    ); 
}

function BannerFrutas(props) {
    return(
      <img src={props.logo} alt={props.alt} className="banner-fruntas_ellipse" />
    );
  }

export default Home;