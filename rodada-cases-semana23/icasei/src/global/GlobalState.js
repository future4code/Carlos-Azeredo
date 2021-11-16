import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../constants/urls";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const [videoName, setVideoName] = useState([])
    const [keyword, setKeyword] = useState('')

    const getVideoName = () => {
        const part = 'search?part=snippet&'
        const query = `q=${keyword}&`
        const maxResult = 'maxResult=5&'
        const order = 'order=viewCount&'
        const type = 'type=video&'
        const token = 'key=AIzaSyA96PiYCPFBBbbYjogiUKa6UqKbKQmC-Wg'

        axios
            .get(`${BASE_URL}${part}${query}${maxResult}${order}${type}${token}`)
            .then((res) => {
                setVideoName(res.data.items)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const data = { videoName, getVideoName, setKeyword }
    console.log("keyword", keyword)

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState