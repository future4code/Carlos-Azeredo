import { Typography } from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { MdArrowBackIosNew, MdRemoveRedEye, MdThumbDown, MdThumbUp } from "react-icons/md"
import ReactPlayer from "react-player"
import { useParams, useHistory } from "react-router-dom"
import { BASE_URL } from "../../constants/urls"
import { goToSearchPage } from "../../routes/coordinator"
import { InfoContainer, MainContainer, VideoContainer } from "./styled"

const VideoPage = () => {
    const [currentVideo, setCurrentVideo] = useState([])
    const { name } = useParams()
    const history = useHistory()


    useEffect(() => {
        const token = 'key=AIzaSyA96PiYCPFBBbbYjogiUKa6UqKbKQmC-Wg'

        axios
            .get(`${BASE_URL}videos?id=${name}&part=snippet,statistics&${token}`)
            .then((res) => {
                setCurrentVideo(res.data.items)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const linkYoutube = `https://www.youtube.com/watch?v=${name}`

    return (
        <MainContainer>
            <button onClick={() => goToSearchPage(history)}><MdArrowBackIosNew /></button>
            {currentVideo.map((data) => {
                return (
                    <VideoContainer>
                        <h4>{data.snippet.title}</h4>
                        <ReactPlayer url={linkYoutube} />
                        <InfoContainer>
                            <h4>{data.snippet.channelTitle}</h4>
                            <div>
                                <p><MdThumbUp/>{data.statistics.likeCount}</p>
                                <p><MdThumbDown/>{data.statistics.dislikeCount}</p>
                            </div>
                        </InfoContainer>
                        <Typography
                            sx={{ height: 80, width: 650, overflow: "auto" }}
                            variant="bold2"
                            color="text.secondary">
                            {data.snippet.description}
                        </Typography>
                        <p><MdRemoveRedEye/>{data.statistics.viewCount}</p>
                    </VideoContainer>
                )
            })}
        </MainContainer>
    )
}

export default VideoPage