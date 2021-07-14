import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { InputsContainer, StyledInputs, ButtonDiv, InfoDiv, StyledButton } from './styled'
import styled from 'styled-components'



const MainContainer = styled.div`
height: 100vh;
background-image: url("https://image.shutterstock.com/image-illustration/flying-saucer-ship-over-alien-600w-1389393983.jpg");
background-repeat: no-repeat;
background-position: top center ;
background-size: cover;
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
h1{
    color: cornsilk;
    font-weight: 200;
    font-size: 85px;
}
`


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
    const onSubmitLogin = (event) => {
        event.preventDefault()
        console.log (email, password)
        const body = {
            email:email,
            password:password
        }
        axios.post ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-azeredo-molina/login', body)
        .then((response) => {
            console.log('Deu certo: ', response.data.token)
            localStorage.setItem('token', response.data.token)
            history.push('/AdminHomePage')
        }).catch((error) => {
            console.log('Deu errado: ',error.response)

        })
    } 



 

    const goBack = () => {
        history.goBack()
    }


    
 

    return (
        <MainContainer>
            <InfoDiv>
            <h1>Login</h1>
            <form onSubmit={onSubmitLogin}>
            <InputsContainer>
                <StyledInputs placeholder={'email'} type="email" value={email} onChange={onChangeEmail} required/>
                <StyledInputs placeholder={'senha'} type={'password'} value={password} onChange={onChangePassword} required />
            </InputsContainer>
            <ButtonDiv>
                <StyledButton onClick={goBack}>Voltar</StyledButton>
                <StyledButton >Entrar</StyledButton>
            </ButtonDiv>
            </form>
            </InfoDiv>
            
        </MainContainer>
    )
}