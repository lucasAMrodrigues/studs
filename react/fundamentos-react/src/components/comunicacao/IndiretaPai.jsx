import React, { useState } from 'react'
import IndiretaFilho from './indiretaFilho'

export default (props) => {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setnerd] = useState(false)

    function forneceInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setnerd(nerd)
    }
    return (
        <div>
            <span>{nome} </span>
            <span><strong>{idade} </strong></span>
            <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
            <IndiretaFilho quandoClicar={forneceInformacoes} />
        </div>
    )
}