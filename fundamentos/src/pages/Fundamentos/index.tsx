import React, { ReactNode } from 'react';
import LayoutCard from '../../Components/LayoutCard';

import ComponentControlado from '../../Components/FuncoesBasicas/ComponentControlado'
import ComponentCondicional from '../../Components/FuncoesBasicas/ComponentCondicional'
import Familia from '../../Components/FuncoesBasicas/ComponentFamilia/Familia'

import { Container } from './styles';

interface FundamentosProps {
  children: ReactNode;
}

function Fundamentos({ children }: FundamentosProps) {
  return (
    <>
      <Container>
        <h1>Fundamentos</h1>
        <div className="Container_Card">
          <LayoutCard title="Component Controlado" color="#ffa700">
            <ComponentControlado />
          </LayoutCard>
          <LayoutCard title="Renderizção Condicional" color="#ffa700">
            <ComponentCondicional usuario={{ name: 'Pedro' }} />
            <ComponentCondicional usuario={{ email: 'pedro@pedro.com' }} />
          </LayoutCard>
          <LayoutCard title="Components com Filhos" color="#d62d20">
            <Familia sobrenome="Gomez" />
          </LayoutCard>
        </div>
        {children}
      </Container>
    </>
  );
};

export default Fundamentos;
