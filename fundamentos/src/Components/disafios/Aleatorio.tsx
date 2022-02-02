import React from 'react';

interface AleatorioProps {
  min: number;
  max: number;
}

function Aleatorio({min,max }: AleatorioProps) {
  const calc =  Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <>
      <h1>Um número aleatório entre {min} e {max} e = {calc}</h1>
    </>
  );
}

export default Aleatorio;
