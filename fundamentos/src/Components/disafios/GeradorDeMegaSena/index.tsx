import React, { useState }from 'react';


import { Container } from './styles';



interface GeradorDeMegaSenaProps {
  number: any;
  casas: any;

}

function GeradorDeMegaSena({number, casas}: GeradorDeMegaSenaProps) {

  
function gerador(length: number, max: number){

  const arrayNunbers = Array.apply(null, Array(length))

   return arrayNunbers.map(function() {
     return Math.round(Math.random() * max);
 })
 }
   const inicialValue = number && casas;
   const [valor, setValor] = useState(inicialValue)

   console.log(valor.toString)

  return (
    <Container>
      <div>
          <h1>{valor.join(" ")}</h1>
          <button onClick={_ => setValor(gerador(number,casas))}>Gerar números</button>
      </div>
     
    </Container>
  );
};

export default GeradorDeMegaSena;
