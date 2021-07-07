import React from 'react'
import { useHistory } from 'react-router-dom'
import { MainContainer, InputsContainer, StyledInputs, ButtonDiv, InfoDiv, StyledButton } from './styled'

export default function LoginPage() {
    
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const renderAdminHomePage = () => {
        history.push("AdminHomePage")
    }
    return (
        <MainContainer>
            <InfoDiv>
            <h1>Login</h1>
            <InputsContainer>
                <StyledInputs placeholder={'email'} />
                <StyledInputs placeholder={'senha'} type={'password'} />
            </InputsContainer>
            <ButtonDiv>
                <StyledButton onClick={goBack}>Voltar</StyledButton>
                <StyledButton onClick={renderAdminHomePage}>Entrar</StyledButton>
            </ButtonDiv>
            </InfoDiv>
        </MainContainer>
    )
}