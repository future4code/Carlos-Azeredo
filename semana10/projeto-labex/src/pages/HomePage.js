import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import { MainContainerHomePage, LogoDiv, Logo, ButtonsDiv, StyledButton } from './styled'


const Botao = styled.button`
grid-column-start: 2;
grid-row-start: 3;
border-radius: 8px;
font-size: 1rem;
border:none;
cursor: pointer;
border: 1px solid ${props => props.color};
border-bottom: 50%;
width: 140px;
height:50px;
padding: 0.35rem; 
:hover{
    transform: scale(1.2);
    transition: all 0.5s;
    background-color: ${props => props.color};
}
:active{
    background-color: ${props => props.activeColor};
}

`

const Botao2 = styled.button`
grid-column-start: 2;
grid-row-start: 3;
border-radius: 8px;
font-size: 1rem;
border:none;
cursor: pointer;
border: 1px solid ${props => props.color};
border-bottom: 50%;
width: 140px;
height:50px;
padding: 0.35rem; 
:hover{
    transform: scale(1.2);
    transition: all 0.5s;
    background-color: ${props => props.color};
}
:active{
    background-color: ${props => props.activeColor};
}

`

const Botoes = styled.div`
display: flex;
justify-content: center;
gap:50px;
margin: 30px;
`







export default function HomePage() {

    const history = useHistory()

    const renderListTripsPage = () => {
        history.push("ListTripsPage")
    }

    const renderLoginPage = () => {
        history.push("LoginPage")
    }
    const renderAdminHomePage = () => {
        history.push("AdminHomePage")
    }
    
    return (
        <MainContainerHomePage>
            <LogoDiv>
                <Logo>LabeX</Logo>
            </LogoDiv>
            <Botoes>
                <Botao onClick={renderListTripsPage}>Viagens</Botao>
                <Botao2 onClick={renderLoginPage}>Login</Botao2>
                <Botao2 onClick={renderAdminHomePage}>Area Adm</Botao2>
            </Botoes>
        </MainContainerHomePage>
    )
}