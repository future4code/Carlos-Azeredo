import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const FormContainer = styled.form`
    margin: 0 auto;
`

const VideosContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 12px;
    max-width: 100%;
    width: 1080px;
    margin: 0 auto;
    border: 2px solid blue;
`
export {
    MainContainer,
    VideosContainer,
    FormContainer
}