import React from 'react'
import { useHistory } from 'react-router-dom'
import { MainContainer, LogoDiv, Logo, ButtonsDiv, StyledButton } from './styled'


export default function HomePage() {

    const history = useHistory()

    const renderListTripsPage = () => {
        history.push("ListTripsPage")
    }

    const renderLoginPage = () => {
        history.push("LoginPage")
    }

    return (
        <MainContainer>
            <LogoDiv>
                <Logo>LabeX</Logo>
            </LogoDiv>
            <ButtonsDiv>
                <StyledButton onClick={renderListTripsPage}>Viagens</StyledButton>
                <StyledButton onClick={renderLoginPage}>Login</StyledButton>
            </ButtonsDiv>
        </MainContainer>
    )
}