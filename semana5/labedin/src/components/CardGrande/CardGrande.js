import React from 'react';
import './CardGrande.css'
import styled from "styled-components"

const StyleCardPequeno = styled.div `
display:flex;
align-items:center;
border: 1px solid black;
padding:20px 10px;
height: 150px;

`

function CardGrande(props) {
    return (
        <div className="bigcard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardGrande;