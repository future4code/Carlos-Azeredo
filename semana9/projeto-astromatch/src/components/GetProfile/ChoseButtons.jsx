
import React from 'react'
import styled from 'styled-components';

const ButtonContainer = styled.div`
display:flex;
justify-content:space-between;

background-color: transparent;
    width: 90px;
    height: 70px;
    margin: auto;
    border: none;
    align-items: center;
`

const  ChoiceButton = styled.button`
font-size: 1rem;
border:none;
cursor: pointer;
border: 1px solid ${props => props.color};
border-radius: 50%;
width: 50px;
height:50px;
padding: 0.5rem; 
:hover{
    transform: scale(1.2);
    transition: all 0.5s;
    background-color: ${props => props.color};
}
:active{
    background-color: ${props => props.activeColor};
}
`

function ChoseButtons(props) {
    
    return (
        <ButtonContainer>
           <ChoiceButton onClick={props.onClickNo}>Não</ChoiceButton>
           <ChoiceButton onClick={props.onClickYes}>Sim</ChoiceButton>
        </ButtonContainer>
    )
}


export default ChoseButtons;