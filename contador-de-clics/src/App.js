import "./App.css";
import freeCodeCampLogo from "./img/FreeCodeCamp_logo.svg.png";
import Button from "./components/button";
import Contador from "./components/contador";
import { useState } from "react";

function App() {
    const [numClics, setNumClics] = useState(0);

    const manejarClic = () => {
        setNumClics(numClics + 1);
    };

    const reiciniarContador = () => {
        setNumClics(0);
    };

    return (
        <div className="App">
            <div className="freeCodeCamp-logo-contenedor">
                <img
                    className="freeCodeCamp-logo"
                    src={freeCodeCampLogo}
                    alt="Logo de freeCodeCamp"
                ></img>
            </div>

            <div className="contenedor-principal">
                <Contador numClics={numClics} />
                <Button texto="Clic" manejarClic={manejarClic} />
                <Button texto="Reiniciar" manejarClic={reiciniarContador} />
            </div>
        </div>
    );
}

export default App;
