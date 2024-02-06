import React from "react";

function Titulo(props) {
  const estiloTitulo = {
    fontFamily: props.tipoFuente,
    fontSize: props.tamañoTexto,
    color: props.color,
  };

  //return <h1 style={estiloTitulo}>{props.texto}</h1>;
  return (
    <div
      style={{
        fontFamily: props.tipoFuente,
        fontSize: props.tamañoTexto,
        color: props.color,
      }}
    >
      <h1>Titulo de la pagina</h1>
    </div>
  );
}

export default Titulo;
