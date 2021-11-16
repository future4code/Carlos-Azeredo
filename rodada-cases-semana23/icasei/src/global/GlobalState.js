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
        const maxResults = 'maxResults=9&'
        const type = 'type=video&'
        const token = 'key=AIzaSyBf3JYLEETA9iFjqap90mdSb513A7WmQcc'

        axios
            .get(`${BASE_URL}${part}${query}${maxResults}${type}${token}`)
            .then((res) => {
                setVideoName(res.data.items)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const data = { videoName, getVideoName, setKeyword }

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState