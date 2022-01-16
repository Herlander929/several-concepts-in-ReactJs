import './TabelaProdutos.css'
import React from 'react'
import produtos from '../../data/produtos'

export default (props) => {

    function getLinhas() {
        return produtos.map((produto, i) => {
            return(
                <tr key={produto.id} className={i % 2 === 0 ? 'Par' : ''}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco.toFixed(2)}</td>
                </tr>
            )
        })

    }

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nome</th>
                        <th>Preco</th>
                    </tr>
                </thead>
            </table>
            <tbody>
               <tr>
                {getLinhas()}
               </tr> 
            </tbody>

        </div>
    )


};