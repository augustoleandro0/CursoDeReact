import React from 'react';
import If from './if';

interface ComponentCondicionalProps {
  usuario: {
    name?: string
    email?: string;
  };
}

function ComponentCondicional({ usuario }: ComponentCondicionalProps) {
  return (
    <>
      <div>
        <If test={usuario && usuario.name?.trim}>
          <p>Seja bem-vindo {usuario.name}</p>
        </If>
        <If test={!usuario || !usuario.name?.trim}>
          <p>Seja bem-vindo Guest</p>
        </If>
      </div>
    </>
  );

}

export default ComponentCondicional;
