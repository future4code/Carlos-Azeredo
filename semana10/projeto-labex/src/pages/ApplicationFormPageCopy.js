import styled from 'styled-components'
import {useHistory, useParams} from 'react-router-dom'
import axios from "axios";
import { useEffect, useState } from 'react';
import txt from './paises.txt'
import useForm from '../hooks/useForm.js'
import { MainContainerHomePage, FormDiv, InfoDiv, StyledButton, ButtonsDiv, StyledInput, StyledSelect } from './styled'


const fs = require('fs');
let paises =[]
axios(txt).then(res => paises = res.data.split('\n'))
              

const Botao = styled.button`
border-radius: 8px;
`
const Botao2 = styled.button`
border-radius: 8px;
`
const Botoes = styled.div`
display:flex;
justify-content: center;
gap:30px;
`


const Appl = styled.div`
display: flex;
flex-direction: column;
margin: 10vw;
gap:10px;
`

const Title = styled.h1`
margin:auto;
color:white;
background-position: top center;
`


 function ApplicationFormPage() {
   let id =''
   let idtrip
   let index = 0
  const history = useHistory()
const [trips,setTrips] = useState([])
  


  useEffect(()=>{
    
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-azeredo-molina/trips`).then(
      (res) => {setTrips(res.data.trips)
        console.log(trips)
      }
    ).catch((err)=> console.log(err))
  },[])

 function handleClickRoute() {
  history.push("/ListTripsPage");
}


const {form, onChange} = useForm({trip:'',name:'',age:'',applicationText:'',profession:'',country:''})

function filtraId(ele){
  return ele.name ==form.name
}


function handleForm(event){
  const header = {
    'Content-Type': 'application/json',
  }
  event.preventDefault()
idtrip = trips.filter((e)=> {
 return form.trip === e.name
})
console.log('idtrip',idtrip)
id = idtrip[0].id
  axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-azeredo-molina/trips/${id}/apply`,form,header).then((res) => console.log('deu',res)).catch((err)=>console.log(err))
}



    return (
      <MainContainerHomePage>
        <Title>Inscreva-se para uma viagem</Title>  
        <form onSubmit={handleForm} >
        <InfoDiv>
        <FormDiv>

<StyledSelect name={'trip'} value={form.trip} onChange={onChange}  >
<option value=''selected disabled >Escolha a Viagem</ option>  

  {trips.map((el,i)=> {
     return <option key={el.id}>{el.name}</option>
}
)}
 

</StyledSelect>

<StyledInput name={'name'} value={form.name} onChange={onChange}  placeholder='Nome' ></StyledInput>
<StyledInput name={'age'} value={form.age} onChange={onChange}  placeholder='Idade' ></StyledInput>
<StyledInput name={'applicationText'} value={form.applicationText} onChange={onChange}  placeholder='Texto de Candidatura' ></StyledInput>
<iStyledInput name={'profession'} value={form.profession} onChange={onChange}  placeholder='Profissão' ></iStyledInput>
<StyledSelect name={'country'} value={form.country} onChange={onChange}  >

<option value=''selected disabled >Escolha o País</ option>  
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