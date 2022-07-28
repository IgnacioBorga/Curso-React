import "./App.css";
import "./styles/Normalize.css";
import freeCodeCampLogo from "./img/FreeCodeCamp_logo.svg.png";
import Button from "./components/Button";
import Screen from "./components/Screen";
import ClearButton from "./components/ClearButton";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
    const [inputState, setInputState] = useState("");

    const addInput = (value) => {
        setInputState(inputState + value);
    };

    const clearInput = () => {
        setInputState("");
    };

    const calculateResult = () => {
        if (inputState) {
            setInputState(evaluate(inputState));
        }
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
            <div className="contenedor-calculadora">
                <div>
                    <Screen input={inputState}></Screen>
                </div>

                <div className="fila">
                    <Button clickHandler={addInput}>7</Button>
                    <Button clickHandler={addInput}>8</Button>
                    <Button clickHandler={addInput}>9</Button>
                    <Button clickHandler={addInput}>/</Button>
                </div>
                <div className="fila">
                    <Button clickHandler={addInput}>4</Button>
                    <Button clickHandler={addInput}>5</Button>
                    <Button clickHandler={addInput}>6</Button>
                    <Button clickHandler={addInput}>*</Button>
                </div>
                <div className="fila">
                    <Button clickHandler={addInput}>1</Button>
                    <Button clickHandler={addInput}>2</Button>
                    <Button clickHandler={addInput}>3</Button>
                    <Button clickHandler={addInput}>-</Button>
                </div>
                <div className="fila">
                    <Button clickHandler={addInput}>0</Button>
                    <Button clickHandler={addInput}>.</Button>
                    <ClearButton clickHandler={clearInput}>C</ClearButton>
                    <Button clickHandler={addInput}>+</Button>
                </div>
                <div className="fila">
                    <Button clickHandler={calculateResult}>=</Button>
                </div>
            </div>
        </div>
    );
}

export default App;
