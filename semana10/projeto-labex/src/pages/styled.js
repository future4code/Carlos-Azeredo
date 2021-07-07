import styled from 'styled-components'


const MainContainer = styled.div`
height: 100vh;
background-image: url("teste.jpg");
background-repeat: no-repeat;
background-position: top center ;
background-size: cover;
`
const LogoDiv = styled.div`
display:flex;
flex-direction: row;
`
const Logo = styled.h1`
font-weight: 100;
font-size: 150px;
color: cornsilk;
`
const ButtonsDiv = styled.div`
width: 250px;
display: flex;
justify-content: space-between;
margin: 30px;
`
const StyledButton = styled.button`
font-size: 1rem;
border:none;
cursor: pointer;
border: 1px solid ${props => props.color};
border-bottom: 50%;
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

const InputsContainer = styled.div`
display: flex;
flex-direction: column;
height: 100px;
`

const StyledInputs = styled.input`
width: 200px;
margin:auto;
`
const FormDiv = styled.div`
display: flex;
flex-direction: column;
width: 300px;
margin:auto;
`

const InfoDiv = styled.div`
flex-direction: column;
justify-content: center;
display: flex;
margin: auto;
-webkit-align-items: center;
-webkit-box-align: center;
h1{
    color: white;
}
`


const StyledInput = styled.input`
margin-top: 10px;
border-radius: 10px;
height: 30px;
width: 400px;
`

const StyledSelect = styled.select`
margin-top: 10px;
border-radius: 10px;
height: 30px;
width: 400px;
`
const ButtonDiv = styled.div`
width: 256px;
display: flex;
justify-content: space-between;
margin: auto;
margin-top: 3px;
`
export {
    MainContainer,
    LogoDiv,
    Logo,
    ButtonsDiv,
    StyledButton,
    InputsContainer,
    StyledInputs,
    FormDiv,
    InfoDiv,
    StyledInput,
    StyledSelect,
    ButtonDiv
}

