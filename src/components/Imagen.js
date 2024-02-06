import React from 'react';
import img from '../699441.jpg'

function Imagen(props) {
  const estiloImagen = {
    width: props.ancho,
    height: props.alto
  };

  return <img src={img} style={estiloImagen} />;
}

export default Imagen;
