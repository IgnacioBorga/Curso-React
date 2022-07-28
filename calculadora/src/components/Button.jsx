import React from "react";
import "../styles/Button.css"

function Button(props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor !=="." ) && ( valor !== "=");
    };

    return (
        <div 
            className={`button-contenedor ${esOperador(props.children) ? "operador" : ""}`.trimEnd()}
            onClick = {() => props.clickHandler(props.children)}
        > 
                {props.children}
        </div>
    )
}

export default Button;