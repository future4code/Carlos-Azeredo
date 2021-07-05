import React from 'react'
import ChoosePerson from '../components/ChoosePerson/ChoosePerson'
import ResetButton from '../components/ResetButton/ResetButton'
import GetMatches from '../components/GetMatches/GetMatches'
import Main from '../components/Main/Main'
import {Container} from './styled'
import AppBar from '../components/AppBar/AppBar'
import MatchListPage from '../components/MatchListPage/MatchListPage'
import { getProfile, postChoose, putClear, reset } from '../constantes/url'

function App() {
  return (
    <Container>
      
                           <Main/>
                            {/*<MatchListPage/>*/}

       {/*  <GetMatches/>*/}
      {/*<ChoosePerson/>*/}
      
     
      <ResetButton/> 
    </Container>
  )
  }



export default App;