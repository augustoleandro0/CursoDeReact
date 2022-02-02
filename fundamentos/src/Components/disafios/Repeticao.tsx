import React from 'react';
import styled from "styled-components"
import produtos from '../../data/Produtos'




const Repeticao = styled.div`
      width: 100%;
      color: #000;
      border: 1px solid ;
      margin: 0;

     > table tr td{
       border: 1px solid black
     }
`;


function Reprticao() {

  const tabelaProdutos = produtos.map((produtos) => {
    return (

      <tr key={produtos.id}>
        <td>{produtos.id}</td>
        <td>{produtos.smartphone}</td>
        <td>{produtos.preco}</td>
      </tr>

    )
  })

  return (
    <>
      <Repeticao>
        <table style={{width: '100%'}} >
          <thead>
            <tr>
              <td>
                <h1>Id</h1>
              </td>
              <td>
                <h1>Produto</h1>
              </td>
              <td>
                <h1>Preço</h1>
              </td>
            </tr>
          </thead>
          <tbody>
            {tabelaProdutos}
          </tbody>
        </table>

      </Repeticao>
    </>
  );
}

export default Reprticao;
