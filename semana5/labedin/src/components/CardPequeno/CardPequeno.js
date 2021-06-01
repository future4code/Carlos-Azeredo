import React from 'react';
import './CardPequeno.css'
import styled from "styled-components"




const StyleCardPequeno = styled.div `
display:flex;
align-items:center;
border: 1px solid black;
padding:20px 10px;
height: 150px;

`




function CardPequeno(props) {
    return (
      <StyleCardPequeno>
       
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
    </StyleCardPequeno>    
    
    )
}

export default CardPequeno;