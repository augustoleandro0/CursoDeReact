import React, { ReactNode } from 'react';
import LayoutCard from '../../Components/LayoutCard'
import Repeticao from '../../Components/disafios/Repeticao';
import Aleatorio from '../../Components/disafios/Aleatorio';
import GeradorDeMegaSena from '../../Components/disafios/GeradorDeMegaSena';

import { Container } from './styles';
import '../../App.css'

interface DisafiosProps {
  children: ReactNode;
}



function Disafios({ children }: DisafiosProps) {
  return (
    <Container>
      <h1>Disafios</h1>
      <div className="Container_Card">

        <LayoutCard title="Desafio Aleatorio" color="#ffa700">
          <Aleatorio min={0} max={30} />
        </LayoutCard>

        <LayoutCard title="Desafio Repeticao" color="#0057e7">
          <Repeticao />
        </LayoutCard>
        <LayoutCard title="Desafio Gerador de Mega-Sena" color="#2c7551">
          <GeradorDeMegaSena number={6} casas={60}/>
        </LayoutCard>
      </div>
      {children}
    </Container>
  );
};

export default Disafios;
