import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export const CardDiv = styled.div`
border: 1px solid red;
width: 150vh;
margin: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
:hover{
    cursor: pointer;
}
`
export const RecipeCardContainer = styled(Card)`
  width: 250px;
  margin: 10px
  
`

export const RecipeCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`
