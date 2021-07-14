import React from 'react'
import {createGlobalStyle} from 'styled-components'
import { Router } from './route/Router'


function App() {

  const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    
  }`
  return (
    <div >
         <GlobalStyle/>
      <Router/>
 
    </div>
  );
}

export default App;
