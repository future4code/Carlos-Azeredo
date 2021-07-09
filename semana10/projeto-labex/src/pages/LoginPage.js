import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { MainContainer, InputsContainer, StyledInputs, ButtonDiv, InfoDiv, StyledButton } from './styled'

export default function LoginPage() {
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")
     const history = useHistory()
     
    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }
    const onSubmitLogin = () => {
        console.log (email, password)
        const body = {
            email:email,
            password:password
        }
        axios.post ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-azeredo-molina/login', body)
        .then((response) => {
            console.log('Deu certo: ', response.data.token)
            localStorage.setItem('token', response.data.token)
            history.push('/')
        }).catch((error) => {
            console.log('Deu errado: ',error.response)

        })
    } 



 

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
                <StyledInputs placeholder={'email'} type="email" value={email} onChange={onChangeEmail}/>
                <StyledInputs placeholder={'senha'} type={'password'} value={password} onChange={onChangePassword} />
            </InputsContainer>
            <ButtonDiv>
                <StyledButton onClick={goBack}>Voltar</StyledButton>
                <StyledButton onClick={onSubmitLogin}>Entrar</StyledButton>
            </ButtonDiv>
            </InfoDiv>
        </MainContainer>
    )
}