import React, { useState } from 'react'


import GetProfilePage from '../GetProfile/GetProfilePage'

import AppBar from '../AppBar/AppBar'
import MatchListPage from '../MatchListPage/MatchListPage'
import styled from 'styled-components'

const MainContainer = styled.div`
border: 1px solid black;
border-radius: 3px;
width: 400px;
height: 800px;
margin: 30px;
display:flex;
flex-direction:column;
border-radius: 10px;
box-shadow: 0 0 0.3rem 0.3rem #8f9779;
`

function Main() {
  const [selectdPage, setSelectPage] = useState('choose-profile')
  const renderSelectedPage = () => {
    switch(selectdPage){
      case 'choose-profile':
        return <GetProfilePage/>
        case 'match-list':
          return <MatchListPage/>
          default:
            return <GetProfilePage/>
    }
  }


const goToChooseProfilePage = () => {
 setSelectPage('chose-profile')
}
 
const goToMacthListPage = () => {
  setSelectPage('match-list')
 }


  return (
    <MainContainer>
        <AppBar 
        goToChooseProfilePage={goToChooseProfilePage} 
        goToMacthListPage={goToMacthListPage}
        />

        {renderSelectedPage()}
                           

       {/*  <GetMatches/>*/}
      {/*<ChoosePerson/>*/}
      
     
     {/* <ResetButton/> */}
    </MainContainer>
  )
  }



export default Main;