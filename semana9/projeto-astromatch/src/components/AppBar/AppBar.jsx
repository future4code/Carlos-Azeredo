import React from 'react'
import styled from 'styled-components';
import astromatch from '../Img/astromatch.png'


const AppBarContainer=styled.div `
display:flex;
justify-content:space-between;
border-bottom: 1px solid lightgray;
align-items:center;
padding: 0 8px;
background-color:black;
`

const Logo = styled.img ` 
    width: 300px;
    margin-left: 0px;
    display: flex;
    object-fit:scale-down;
    height: 55px;
    align-items:center;
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


function AppBar(props) {
    return (
        <AppBarContainer >
            <ChoiceButton onClick={props.goToChooseProfilePage}>novo</ChoiceButton>
            <Logo src={astromatch}/>
            <ChoiceButton onClick={props.goToMacthListPage}>Lista</ChoiceButton>
        </AppBarContainer>
    )
}

export default AppBar;