import React, { ReactNode } from 'react';

import {Link} from 'react-router-dom'

import { Container } from './styles';

interface NavigationProps {
  children: ReactNode;
}

function Navigation({ children }: NavigationProps) {
  return (
    <Container>
      <nav>
          <Link to="/">Fundamentos</Link>
          <Link to="/disafios">Disafios</Link>
      </nav>
      {children}
    </Container>
  );
};

export default Navigation;
