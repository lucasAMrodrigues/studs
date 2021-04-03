import React from "react";

export default (props) => { 
    const min = props.min
    const max = props.max   
    const aleatorio = parseInt(Math.random()*(max-min))+min
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>Valor Máximo: {max} </p>
            <p>Valor Mínimo: {min} </p>
            <p><strong>Valor Escolhido: {aleatorio}</strong></p>
        </div>
    )}