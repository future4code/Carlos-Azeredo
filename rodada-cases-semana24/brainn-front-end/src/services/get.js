import axios from "axios";
import { BASE_URL } from '../constants/url'

export const getLoterias = (setData) => {
    axios.get(`${BASE_URL}loterias`)

        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const getConcursos = (setData) => {
    axios.get(`${BASE_URL}loterias-concursos`)

        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

export const getResultados = (setData, id) => {
    axios.get(`${BASE_URL}concursos/${id}`)

        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}