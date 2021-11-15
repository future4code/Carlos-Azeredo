import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import DetailedCard from '../../components/DetailedCard/DetailedCard'
import { MovieDetail } from '../../services/Gets'


const MoviePage = () => {

    const [movie, setMovie] = useState([])
    const { movieId } = useParams()
    const history = useHistory()

    useEffect(() => {
        MovieDetail(setMovie, movieId)
    }, [])

    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <DetailedCard
                onClick={() => goBack()}
                name={movie.original_title}
                title={movie.title}
                overview={movie.overview}
                vote_average={movie.vote_average}
                homepage={movie.homepage}
                background={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            />

        </div>
    )
}

export default MoviePage