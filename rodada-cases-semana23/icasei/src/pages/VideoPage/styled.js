import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    max-width: 100%;
    width: 800px;
    margin: 0 auto;
        button{
            margin-bottom: 14px;
            width: 40px;
            height: 25px;
            border: 2px solid black;
            font-size: 20px;
            background-color: white;
        }
`

const VideoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    
    h4 {
        margin: 8px;
        font-size: large;
    }
    @media (max-width: 420px) {
        width: 360;
    }
`

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
        div {
            display: flex;
            align-items: center;
            p{
                padding: 10px;
            }
        }
`
export {
    MainContainer,
    VideoContainer,
    InfoContainer
}