import React, { ReactNode } from 'react';


interface MenbrosProps {
  children: ReactNode;
  menbros:  string;
  sobrenome: string;
}

function Menbros({ children ,menbros,sobrenome}: MenbrosProps) {
  return (
    <>
      <p>{menbros}<strong> {sobrenome} </strong></p>
      {children}
    </>
  );
}

export default Menbros;
