import React from "react"
import { useHistory } from "react-router"
import { goToVideoPage } from "../../routes/coordinator"

const CardVideo = ({video}) => {
    const history = useHistory()

    return (
        <div>
            <img src={video.snippet.thumbnails.medium.url} alt={"imagem"}/>
            <p>{video.snippet.channelTitle}</p>
            <button onClick={() => goToVideoPage(history, video.id.videoId)}>Ir para video</button>
        </div>
    )
}

export default CardVideo