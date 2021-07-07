import React from 'react'
import {useHistory} from 'react-router-dom'
import { MainContainer, ButtonsDiv, StyledButton, InfoDiv, FormDiv, StyledInput, StyledSelect } from './styled'

export default function CreateTripPage() {
    const history = useHistory()

    const goBack = () =>{
        history.goBack()
    }
    return (
        <MainContainer>
            <InfoDiv>
            <h1>Cadastrar viagem</h1>
            <FormDiv>
            <StyledInput placeholder={"Título"}/>
            <StyledSelect>
                <option>Escolha um Planeta</option>
                <option>Exemplo</option>
                <option>Exemplo</option>
            </StyledSelect>
            <StyledInput type="date"/>
            <StyledInput placeholder={"Descrição"}/>
            <StyledInput placeholder={"Duração em dias"}/>
            </FormDiv>

            <ButtonsDiv>
            <StyledButton onClick={goBack}>Voltar</StyledButton>
            <StyledButton>Criar</StyledButton>
            </ButtonsDiv>
            </InfoDiv>
        </MainContainer>
    )
}
