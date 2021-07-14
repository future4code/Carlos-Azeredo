
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import lixoImg from '../img/lixo.png'

const Appl = styled.div`
height: 100vh;
background-image: url("https://image.shutterstock.com/z/stock-photo-earth-in-the-space-blue-planet-for-wallpaper-green-planet-or-globe-on-galaxy-elements-of-this-1718232061.jpg");
background-repeat: no-repeat;
background-position: top center ;
background-size: cover;
`


const Botao = styled.button`
grid-column-start: 2;
grid-row-start: 3;
border-radius: 8px;
font-size: 1rem;
border:none;
cursor: pointer;
border: 1px solid ${props => props.color};
border-bottom: 50%;
width: 140px;
height:50px;
padding: 0.35rem; 
:hover{
    transform: scale(1.2);
    transition: all 0.5s;
    background-color: ${props => props.color};
}
:active{
    background-color: ${props => props.activeColor};
}

`

const Botao2 = styled.button`
grid-column-start: 2;
grid-row-start: 3;
border-radius: 8px;
font-size: 1rem;
border:none;
cursor: pointer;
border: 1px solid ${props => props.color};
border-bottom: 50%;
width: 140px;
height:50px;
padding: 0.35rem; 
:hover{
    transform: scale(1.2);
    transition: all 0.5s;
    background-color: ${props => props.color};
}
:active{
    background-color: ${props => props.activeColor};
}

`

const Botoes = styled.div`
display: flex;
justify-content: center;
gap:50px;
margin: 30px;
`


const Viagens = styled.div``

const Title = styled.h1`
margin:auto;
color:white;
`


const Lixin = styled.img`
height:70%;
margin: 5px;
padding: 5px;
&:hover{
  background: rgba(214,214,214,1);
}
`
const Trip = styled.div`
display:flex;
justify-content:space-between;
height:30px;
margin: 10px;
background: rgba(251,251,251,1);
border-radius: 10px;
align-items: center;
box-shadow: 2px 2px 5px 0px;
p{margin:5px;
width: 90%;
  &:hover{
  background: rgba(214,214,214,1);
}
}
`


function AdminHomePage() {
  const [viagens,setViagens] = useState([])
  let count = 0
  useEffect(()=>{if(!localStorage.getItem('token')){
    history.push('/loginPage')
  }
axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-azeredo-molina/trips`).then((res)=>{
  console.log(res.data.trips)
  setViagens(res.data.trips)
})

},[])

  function logout() {
    localStorage.removeItem('token')
    history.push('/loginPage')
  }
  const history = useHistory()
  function newTrip(){
    history.push('/CreateTripPage')
  }
  function voltar(){
  history.push('/')
  }


  function deleteTrip(key){
    const header = {
      'auth' : localStorage.getItem('token')
    }
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-azeredo-molina/trips/${key}`,{
    headers: header}).then((res)=>{
history.go(0)
}).catch((err)=>console.log(err))
  }
    return (

      <Appl>
      <Title>Painel Administrativo</Title>
     <Botoes> 
      <Botao onClick={voltar}>Voltar</Botao>
      <Botao onClick={newTrip} >Criar Viagem</Botao>
      <Botao onClick={logout} >Logout</Botao>
      </Botoes>
      <Viagens>
        {viagens.map((el)=>{
          return <Trip  key={el.id}>
            <p onClick={() => history.push("/TripDetailsPage")} >{el.name}</p>
                <Lixin onClick={() => deleteTrip(el.id)} src={lixoImg} alt='excluir'/>
            </Trip>
        })}
      </Viagens>
      </Appl>
    );
  }
  
  export default AdminHomePage;
  
