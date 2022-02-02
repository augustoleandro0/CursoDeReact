import React, { ReactNode } from 'react';

import { Container } from './styles';

interface ComponenteComClasseProps {
  children: ReactNode;
}

function ComponenteComClasse({ children }: ComponenteComClasseProps) {
  return (
    <Container>
      <h1>ComponenteComClasse</h1>
      {children}
    </Container>
  );
};

export default ComponenteComClasse;
