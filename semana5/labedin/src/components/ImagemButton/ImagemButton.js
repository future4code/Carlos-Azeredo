import React from 'react';
import './ImagemButton.css'
import styled from "styled-components"




const StyleCardPequeno = styled.div `
display:flex;
align-items:center;
border: 1px solid black;
padding:20px 10px;
height: 150px;

`
function ImagemButton(props) {
    return (
        <div className="image-button-container">
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </div>

    )
}

export default ImagemButton;