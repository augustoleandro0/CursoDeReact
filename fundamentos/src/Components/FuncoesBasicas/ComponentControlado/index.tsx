
import React, { useState } from 'react';

import { Container } from './styles';



function ComponentControlado() {
  const [valor, setValor] = useState('inicial')

  return (
    <Container>
      <input value={valor} onChange={e => setValor(e.target.value)}/>
    </Container>
  );
};

export default ComponentControlado;
