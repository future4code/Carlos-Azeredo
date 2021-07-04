import React from 'react'


import GetProfilePage from '../GetProfile/GetProfilePage'
import {Container} from './styled'
import AppBar from '../AppBar/AppBar'
import MatchListPage from '../MatchListPage/MatchListPage'
import styled from 'styled-components'

const MainContainer = styled.div`
border: 1px solid black;
border-radius: 3px;
width: 400px;
height: 600px;
margin: 30px;
display:flex;
flex-direction:column;
`

function Main() {
  return (
    <MainContainer>
        <AppBar/>
                            {/*<GetProfilePage/>*/}
                            <MatchListPage/>

       {/*  <GetMatches/>*/}
      {/*<ChoosePerson/>*/}
      
     
     {/* <ResetButton/> */}
    </MainContainer>
  )
  }



export default Main;