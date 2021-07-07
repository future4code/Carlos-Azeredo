import React from 'react'
import { MainContainer, StyledButton, ButtonsDiv } from './styled'
import { useHistory } from 'react-router-dom'


export default function AdminHomePage() {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const renderCreateTripPage = () => {
        history.push("CreateTripPage")
    }

    const renderLoginPage = () => {
        history.push("LoginPage")
    }

    return (
        <MainContainer>
            <ButtonsDiv>
                <StyledButton onClick={goBack}>Voltar</StyledButton>
                <StyledButton onClick={renderCreateTripPage}>Criar Viagem</StyledButton>
                <StyledButton onClick={renderLoginPage}>Logout</StyledButton>
            </ButtonsDiv>
        AdminHomePage

        </MainContainer>
    )
}