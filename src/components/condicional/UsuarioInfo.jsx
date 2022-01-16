import React from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'



export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <if test={usuario && usuario.nome}>
            Seja bem vindo <strong>{props.usuario.nome} </strong>!
            </if>

            <if test={!usuario ||  !usuario.nome}>
            Seja bem vindo <strong>Amigão!</strong>!
            </if>
          
        </div>
    )
}