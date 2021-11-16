import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const FormContainer = styled.form`
    padding-top: 12px;
    margin: 0 auto;
        input{
            width: 260px;
            height: 40px;
            font-size: 20px;
        }
        button{
            border: none;
            width: 30px;
            height: 30px;
            background-color: white;
            font-size: 20px;
        }
`

const VideosContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 12px;
    max-width: 100%;
    width: 1080px;
    margin: 0 auto;
`
export {
    MainContainer,
    VideosContainer,
    FormContainer
}