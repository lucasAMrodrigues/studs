import React from 'react'

export default function ComParametro(props){
    const status = props.nota >= 7 ? 'Aprovado(a)' : 'Reprovado(a)'  
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                {props.aluno} tem Nota {props.nota} e está {status} 
            </p>
        </div>
    )
} 