import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToFeedPage } from '../routes/coordinator'

export const login = (body, clear, history, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            alert( "Seja bem vindo !" , res)
            clear()
            setIsLoading(false)
            goToFeedPage(history)
            setRightButtonText("Logout")
        })
        .catch((err) =>     console.log('ERRO', err))
        
            setIsLoading(false)
           
            
}

export const signUp = (body, clear, history, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            alert( res,"Cadastro efetuado com sucesso!")
            clear()
            setIsLoading(false)
            goToFeedPage(history)
            
            setRightButtonText("Logout")
        })
        .catch((erro) =>  console.log('ERRO', erro))
            setIsLoading(false)
            
        
}