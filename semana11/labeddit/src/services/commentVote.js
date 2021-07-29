import { ErrorRounded } from '@material-ui/icons'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'

export const commentVote = (id, direction, userVote) => {

    const body = {
        direction: direction
    }

    if (userVote === null) {

        axios.post(`${BASE_URL}/comments/${id}/votes`, body, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }) .then((res) => {
                alert('Sucesso', res)
            }) .catch((err) => {
                alert('Erro', ErrorRounded)
            })

    } else  {

        axios.put(`${BASE_URL}/comments/${id}/votes`, body, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then((res) => {
                alert('Sucesso', res)
            }).catch((err) => {
                alert('Erro', err)
            })

}}