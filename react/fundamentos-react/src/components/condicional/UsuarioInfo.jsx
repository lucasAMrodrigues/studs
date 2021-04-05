import React from 'react'
import If, { Else } from './if'

export default (props) => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja bem Vindo <strong>{props.usuario.nome}</strong>!
                <Else>
                    Seja bem Vindo <strong>Amigão</strong>!
                </Else>
            </If>
        </div>
    )
}