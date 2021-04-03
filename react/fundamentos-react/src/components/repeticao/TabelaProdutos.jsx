import './TabelaProdutos.css'
import React from 'react'
import produtos from '../../data/produtos'

export default (props) => {

    const produtosTAB = produtos.map((prod, i) => {
        return (
            <tr key={prod.id} className={i% 2 == 0 ? 'Par' : ''}>
                <td>{prod.id}</td>
                <td>{prod.nome}</td>
                <td>R$ {prod.preco.toFixed(2).replace('.' , ',')}</td>
            </tr>
        );
    });

    return (
        <div className="TabelaProdutos">
            <table style={{ overflow: "auto" }}>
                <th>ID</th> <th>PRODUTO</th> <th>PREÇO</th>
                {produtosTAB}
            </table>
        </div>
    )
}