import React from 'react';
import Menbros from './Menbros'

import { Container,FamiliaStyle } from './styles';

interface ComponentFamiliaProps {
  sobrenome:  string;
}

function ComponentFamilia({sobrenome }: ComponentFamiliaProps) {
  return (
    <Container>
      <FamiliaStyle>
        <h1>Familia</h1>
        <Menbros menbros="Pedro" sobrenome={sobrenome}>
        </Menbros>
        
        <Menbros menbros="Carlos" sobrenome={sobrenome}>

        </Menbros>
        <Menbros menbros="Mario" sobrenome={sobrenome}>

        </Menbros>
    

      </FamiliaStyle>
    </Container>
  );
};

export default ComponentFamilia;
