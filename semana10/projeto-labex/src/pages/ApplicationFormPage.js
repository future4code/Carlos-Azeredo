import styled from 'styled-components'
import {useHistory, useParams} from 'react-router-dom'
import axios from "axios";
import { useEffect, useState } from 'react';
import txt from './paises.txt'
import useForm from '../hooks/useForm.js'
import { MainContainerHomePage, FormDiv, InfoDiv, StyledButton, ButtonsDiv, StyledInput, StyledSelect } from './styled'


const fs = require('fs')
let paises =[]
axios(txt).then(res => paises = res.data.split('\n'))
            


const Title = styled.h1`
margin:auto;
color:white;
background-position: top center ;
`


 function ApplicationFormPage() {
  const history = useHistory()
  const [trip,setTrip] = useState({})
  const params = useParams()
  const id = params.id


  useEffect(()=>{
    const header = {
      'auth' : localStorage.getItem('token')
    }
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-azeredo-molina/trip/${id}`,{
      headers: header}).then(
      (res) => {setTrip(res.data.trip)
        console.log(trip)
      }
    ).catch((err)=> console.log(err))
  },[id, trip])

 function handleClickRoute() {
  history.push("/ListTripsPage");
}

function handleForm(event){
  const header = {
    'Content-Type': 'application/json',
  }
  event.preventDefault()
  form.trip = trip.name
  console.log(form,trip.id)
  axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-azeredo-molina/trips/${trip.id}/apply`,form,header).then((res) => console.log('deu',res)).catch((err)=>console.log(err))
}

const {form, onChange} = useForm({trip:undefined,name:'',age:'',applicationText:'',profession:'',country:''})
    return (
      <MainContainerHomePage>
        <Title>Inscreva-se para a viagem {trip.name} </Title>  
        <form onSubmit={handleForm}  >
        <InfoDiv>
        <FormDiv>
        <option disabled  placeholder={trip.name} ></option>
<StyledInput name={'name'} value={form.name} onChange={onChange} placeholder='Nome' ></StyledInput>
<StyledInput name={'age'} value={form.age} onChange={onChange}  placeholder='Idade' ></StyledInput>
<StyledInput name={'applicationText'} value={form.applicationText} onChange={onChange} placeholder='Texto de Candidatura' ></StyledInput>
<StyledInput name={'profession'} value={form.profession} onChange={onChange}  placeholder='Profissão' ></StyledInput>
<StyledSelect name={'country'} value={form.country} onChange={onChange}  >

<StyledSelect value=''selected disabled >Escolha o País</ StyledSelect>       

{paises.map((el)=> <option>{el}</option>)}


</StyledSelect>
<ButtonsDiv>
<StyledButton>Enviar</StyledButton>  
<StyledButton onClick={() => handleClickRoute("/ListTripsPage") }>Voltar</StyledButton>  
</ButtonsDiv>
</FormDiv>
</InfoDiv>
</form>
  </MainContainerHomePage>
    );
  }
  
  export default ApplicationFormPage;