import axios from 'axios'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {MainContainer} from './styled'
import { useProtectedPage } from '../hook/useProtectedPage'


export default function  TripDetailsPage(){

  useProtectedPage() 

  
useEffect (() => {
    const token = localStorage.getItem('token')
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-azeredo-molina/trip/4xxJGzMigfaXEhGr5lMZ', {
     headers: {
         auth:token
     } 
    })
    .then((response) => {
        console.log(response.data)
    }).catch ((error) => {
        console.log('Deu erro:', error.response)
    })
},[])



useEffect (() => {
    const token = localStorage.getItem('token')
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-azeredo-molina/trip/4xxJGzMigfaXEhGr5lMZ', {
     headers: {
         auth:token
     } 
    })
    .then((response) => {
        console.log(response.data)
    }).catch ((error) => {
        console.log('Deu erro:', error.response)
    })
},[])



return (
    <MainContainer>
        TripDetailsPage
        <button>Voltar</button>
    </MainContainer>
)
}