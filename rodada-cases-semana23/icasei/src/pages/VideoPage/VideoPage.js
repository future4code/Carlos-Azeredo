import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/urls"

const VideoPage = () => {
    const [currentVideo, setCurrentVideo] = useState([])
    const {name} = useParams()

    useEffect(() => {
        const token = 'key=AIzaSyA96PiYCPFBBbbYjogiUKa6UqKbKQmC-Wg'

        axios
        .get(`${BASE_URL}videos?id=${name}&part=snippet,statistics&${token}`)
        .then((res) => {
            setCurrentVideo(res.data.items)
            console.log("Video atual", res.data.items)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])


    return (
        <div>
           {currentVideo.map((data) => {
               return (
                   <p>{data.snippet.title}</p>
               )
           })}
        </div>
    )
}

export default VideoPage