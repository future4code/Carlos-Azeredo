import React from 'react'
import { MainContainer, FormDiv, InfoDiv, StyledButton, ButtonsDiv, StyledInput, StyledSelect } from './styled'
import { useHistory } from 'react-router-dom'

export default function ApplicationFormPage() {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <MainContainer>
            <InfoDiv>
                <h1>Cadidate-se para uma viagem</h1>
                <FormDiv>
                    <StyledSelect>
                        <option>exemplo</option>
                        <option>exemplo</option>
                        <option>exemplo</option>
                    </StyledSelect>
                    <StyledInput placeholder={'Nome'} />
                    <StyledInput placeholder={'Idade'} />
                    <StyledInput placeholder={'Texto de candidatura'} />
                    <StyledInput placeholder={'Profissão'} />
                    <StyledSelect>
                        <option>exemplo</option>
                        <option>exemplo</option>
                        <option>exemplo</option>
                    </StyledSelect>

                </FormDiv>
                <ButtonsDiv>
                    <StyledButton onClick={goBack}>Voltar</StyledButton>
                    <StyledButton>Enviar</StyledButton>
                </ButtonsDiv>

            </InfoDiv>
        </MainContainer>
    )
}