import React, { useContext } from "react"
import CardVideo from "../../components/CardVideo/CardVideo"
import GlobalStateContext from "../../global/GlobalStateContext"
import { FormContainer, MainContainer, VideosContainer } from "./styled"
import { MdSearch } from "react-icons/md"

const SearchPage = () => {
    const { getVideoName, keyword, setKeyword, videoName } = useContext(GlobalStateContext)

    const handleChange = (event) => {
        setKeyword(event.target.value)
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
    }

    return (
        <MainContainer>
            <FormContainer onSubmit={onSubmitForm}>
                    <input
                        type="text"
                        placeholder="Pesquise seu vídeo"
                        value={keyword}
                        onChange={handleChange}
                    />
                    <button onClick={() => getVideoName()}><MdSearch /></button>
            </FormContainer>
            <VideosContainer>      
            {videoName.map((videoList) => {
                    return <CardVideo key={videoList.id} video={videoList}
                    />
                })
            }
            </VideosContainer>
        </MainContainer>
    )
}

export default SearchPage