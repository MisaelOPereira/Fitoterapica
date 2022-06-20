import { useState, useEffect } from 'react';

import CamomilaImg from '../../assets/aboutus-images/camomila.png';
import GirassolImg from '../../assets/aboutus-images/girassol.png';
import LavandaImg from '../../assets/aboutus-images/lavanda.png';
import HibiscoImg from '../../assets/aboutus-images/hibisco.png';
import ChaImg from '../../assets/aboutus-images/cha.png';
import MoleculaImg from '../../assets/aboutus-images/molecula.png';
import EarthImg from '../../assets/aboutus-images/earth.png';
import HeartImg from '../../assets/aboutus-images/heart.png';
import LogoImg from '../../assets/aboutus-images/logo.png';

import './styles.css';

export function AboutUs() {
  const [logo, setLogo] = useState<HTMLElement | null>();
  const [camomila, setCamomila] = useState<HTMLElement | null>();
  const [girassol, setGirassol] = useState<HTMLElement | null>();
  const [lavanda, setLavanda] = useState<HTMLElement | null>();
  const [hibisco, setHibisco] = useState<HTMLElement | null>();
  const [cha, setCha] = useState<HTMLElement | null>();
  const [molecula, setMolecula] = useState<HTMLElement | null>();
  const [earth, setEarth] = useState<HTMLElement | null>();
  const [heart, setHeart] = useState<HTMLElement | null>();
  
  useEffect(() => {
    setLogo(document.getElementById('logo'));
    setCamomila(document.getElementById('camomila'));
    setGirassol(document.getElementById('girassol'));
    setLavanda(document.getElementById('lavanda'));
    setHibisco(document.getElementById('hibisco'));
    setCha(document.getElementById('cha'));
    setMolecula(document.getElementById('molecula'));
    setEarth(document.getElementById('earth'));
    setHeart(document.getElementById('heart'));
  }, []);
  
  useEffect(() => {
    document.querySelector('.aboutus-page')?.addEventListener('scroll', move);
  }, [logo]);

  function move() {
    const incrementer = document.querySelector('.aboutus-page')!.scrollTop;

    if (logo) {
      logo.style.bottom = 20 + incrementer * 0.05 + '%'
      camomila!.style.bottom = 40 + incrementer * 0.06 + '%'
      camomila!.style.left = 85 + incrementer * 0.05 + '%'
      girassol!.style.bottom = 70 + incrementer * 0.07 + '%'
      girassol!.style.left = 75+ incrementer * 0.08 + '%'
      lavanda!.style.bottom = 60 + incrementer * 0.05 + '%'
      lavanda!.style.left = 0 + incrementer * -0.06 + '%'
      hibisco!.style.bottom = 70 + incrementer * 0.08 + '%'
      hibisco!.style.left = 20 + incrementer * -0.08 + '%'
      cha!.style.bottom = 50 + incrementer * 0.1 + '%'
      cha!.style.left = 65 + incrementer * 0.08 + '%'
      molecula!.style.left = 5 + incrementer * -0.2 + '%'
      earth!.style.left = 20 + incrementer * -0.18 + '%'
      heart!.style.left = 40 + incrementer * -0.12 + '%'
    }
  }
  
  return (
    <div className="aboutus-page">
      <section className="animated">
        <img src={CamomilaImg} alt="camomila" id="camomila"/>
        <img src={GirassolImg} alt="girassol" id="girassol"/>
        <img src={LavandaImg} alt="lavanda" id="lavanda"/>
        <img src={HibiscoImg} alt="hibisco" id="hibisco"/>
        <img src={ChaImg} alt="cha" id="cha"/>
        <img src={MoleculaImg} alt="molecula" id="molecula"/>
        <img src={EarthImg} alt="terra" id="earth"/>
        <img src={HeartImg} alt="coração" id="heart"/>
        <img src={LogoImg} alt="logo" id="logo"/>
      </section>
      <section className="about-us">
        <h1>Sobre nós</h1>
        <div className="delimitation">
          <p>A Fitoterápica surgiu da ideia de perpetuar o conhecimento a respeito da flora brasileira. O conhecimento dos fitoterápicos, conhecidos também como plantas medicinais, está presente na cultura de diversos povos.Além do enriquecimento cultural passado de geração para geração, os fármacos são uma herança importantíssima para nós, brasileiros.
            <span> Essas plantas, durante toda a história da humanidade tiveram um papel muito importante para manter a hereditariedade dos nossos povos originários e até hoje é visto com muito apreço por muitos brasileiros.
                Entretanto nós temos muitas dificuldades em encontrar as informações sobre esses terápicos locais na internet, especialmente em uma linguagem acessível e fácil, que de fato democratize esse conhecimento.
              <br /><br /> <span><i><b>A verdade, é que nosso principal objetivo é que o conhecimento das plantas medicinais brasileiras continue sendo valorizado e atualizado. A valorização da nossa cultura, fauna e flora deve ser sempre atemporal.</b></i></span> 
            </span>
          </p>
          <br />
          <p>Nossos valores são:</p>

        </div>
          <div className="pilares">
              <div className="card" >
                  <img src={EarthImg} alt="Terra" />
                  <span>
                      <strong>Conexão: </strong>  
                      Sabemos que um conhecimento mais amplo da nossa flora aumenta a sua valorização. Acreditamos que isso possa motivar as pessoas a se engajarem em lutas que foquem na preservação ambiental. 
                  </span>
              </div>
              <div className="card">
                  <img src={HeartImg} alt="Coração" />
                  <span>
                  <strong>Confiabilidade: </strong>  
                  Buscamos sempre trazer o conhecimento de fontes confiáveis que sempre estão disponíveis para consulta;
                  </span>
              </div>
              <div className="card"> 
                  <img src={MoleculaImg} alt="Molecula" />
                  <span>
                      <strong>Diversidade: </strong>  
                      Incluímos plantas dos mais diversos locais do brasil, para que todos consigam ter exemplos de plantinhas locais. 
                  </span>
              </div>
          </div>
      </section>
    </div>
  );
}