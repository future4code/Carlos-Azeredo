import React from 'react'
import { useHistory } from 'react-router-dom'
import { MainContainer, StyledButton, InfoDiv, ButtonsDiv } from './styled'

export default function ListTripsPage() {
    const history = useHistory()

    const renderMainPage = () => {
        history.goBack()
    }

    const renderApplicationFormPage = () => {
        history.push("ApplicationFormPage")
    }
    return (
        <MainContainer>
            <InfoDiv>
            <h1>Viagens Disponíveis</h1>
            <ButtonsDiv>
            <StyledButton onClick={renderMainPage}>Voltar</StyledButton>
            <StyledButton onClick={renderApplicationFormPage}>Inscreva-se</StyledButton>
            </ButtonsDiv>
            </InfoDiv>

        </MainContainer>
    )
}
