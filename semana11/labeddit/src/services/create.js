import axios from 'axios'
import { BASE_URL } from '../constants/urls'


export const createPost = (body, clear) => {
    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
        .then((res) => {
            clear()
            alert('Post criado com sucesso', res)
        })
        .catch((err) => {
            console.log('ERRO', err)

        })

}  

export const createComment = (id, body, clear) => {
    axios.post(`${BASE_URL}/posts/${id}/comments`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
        .then((res) => {
            clear()
            console.log('Comentário adicionado com sucesso', res)
        })
        .catch((err) => {
            console.log('ERRO', err)
        })
}
