import axios from 'axios'
import { BASE_URL } from '../constants/urls'

export const postVote = (id, direction, userVote) => {

    const body = {
        direction: direction
    }
    console.log(direction)
    
    if (userVote === null) {
        axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then((res) => {
            alert('Voto criado com Sucesso', res)
        }).catch((err) => {
            console.log('Erro', err.response.data)
            alert("Sucesso", err.response.data)
        })

    } else {

        axios.put(`${BASE_URL}/posts/${id}/votes`, body, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then((res) => {
            alert('Voto criado com Sucesso', res)
        }).catch((err) => {
            console.log('Erro', err.response.data.message)
            alert("Sucesso", err.response.data)
        })
    } 
}