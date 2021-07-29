import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import { StyledToolbar } from '../Header/styled'
import Button from '@material-ui/core/Button'
import {goToFeedPage, goToLogin} from '../../routes/coordinator'
import { useHistory } from 'react-router'



const Header = ({rightButtonText, setRightButtonText}) => {
  const token = localStorage.getItem("token")
  const history = useHistory()
   

    const logout = () =>{
      localStorage.removeItem("token")

    }

    const rightButtonAction = () => {
      if (token){
        logout()
        setRightButtonText("login")
        goToLogin(history)
      } else {
        goToLogin(history)
      }

    }


    return (   
      <AppBar position="static">
        <StyledToolbar>        
          <Button onClick={() => goToFeedPage(history) } color="inherit">LabEddit</Button>
          <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
        </StyledToolbar>
      </AppBar>    
  )
}
export default Header