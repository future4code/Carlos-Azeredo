import axios from 'axios'
import BASE_URL from '../constants/Url'
import API_KEY from '../constants/Key'

export const Movies = (setData, movies) => {

    axios.get(`${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)

        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
}

export const MovieDetail = (setData, id) => {
    axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`)

        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.log(err);
        })

}

export const MovieByGenre = (setData, genre) => {
    axios.get(`${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`)

        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
}