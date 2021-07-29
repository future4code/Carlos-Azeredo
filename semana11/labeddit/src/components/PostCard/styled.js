import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'  

const CardDiv = styled.div`
background-color: grey;
width: 900px;
height: 200px;
margin: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5px;
:hover{
    cursor: pointer;
}
`

const IconsDiv = styled.div`
border: 1px solid red;
display:flex;
width: 100%;
justify-content: space-evenly;
`
const VoteDiv = styled.div`
display: flex;
`

const CommentDiv = styled.div`
display: flex;
align-items: center;

`

const BodyDiv = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-bottom: 10px;
h2{
    color: black;
}
`


const Icone = styled.span`
    font-size: 20px;`



const RecipeCardContainer = styled(Card)`
width: 650px;
margin: 10px;
color: black;
background-color: #697aef;
border: black;
`

const RecipeCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  background-color: #d6d9da;
`

const TitleDiv = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: flex-end;
margin-bottom: 10px;
h1{
    margin-top: 5px;
}
`
const UserDiv = styled.div`
width: 100%;
margin-bottom: 10px;
h3{
color: black;
}
h6{
    color: black;
}
`

export {
    CardDiv,
    IconsDiv,
    VoteDiv,
    CommentDiv,
    RecipeCardContainer,
    RecipeCardContent,
    BodyDiv,
    Icone,
    TitleDiv,
    UserDiv
}