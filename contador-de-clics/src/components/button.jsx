import React from "react";
import "../styles/button.css";

function Button({texto, manejarClic}) {
  return (
    <button
      className={`boton-${texto}`}
      onClick= {manejarClic}>
        {texto}
    </button>
  )
}

export default Button;