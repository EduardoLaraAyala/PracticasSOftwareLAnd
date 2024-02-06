import React from 'react';

function Parrafo(props) {
  const estiloParrafo = {
    fontFamily: props.tipoFuente,
    fontSize: props.tamañoTexto,
    color: props.color
  };

  return <p style={estiloParrafo}>{props.texto} esta es la 1ra practica de la maravillosa empresa SoftwareLAnd</p>;
}

export default Parrafo;
