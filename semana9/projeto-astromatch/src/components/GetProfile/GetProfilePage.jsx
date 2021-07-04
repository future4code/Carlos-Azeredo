import React, { useEffect, useState } from 'react'
import ProfileCard from './ProfileCard';
import ChoseButtons from './ChoseButtons';
import axios from 'axios';


function GetProfilePage() {
    const [profileToChoose, setProfileToChoose] = useState(undefined)    
    
 const getProfileToChoose = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carlos-azeredo-molina/person').then(response => {
        console.log('Perfil',response.data.profile)
        setProfileToChoose(response.data.profile)
    })
 }

 const chooseProfile = (choice) => {
    const body = {
        choice: choice,
        id: profileToChoose.id
    }
    setProfileToChoose(undefined)

    axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carlos-azeredo-molina/choose-person', body).then(response =>{
      
        getProfileToChoose()
    })

 }
      
useEffect(() => {
    getProfileToChoose()
        
}, [])

const onClickNo = () => {
   chooseProfile(false)
    
  }



const onClickYes = () => {
    chooseProfile(true)
}


    return (
        <div>
            { profileToChoose ?
            (<>
            <ProfileCard profile={profileToChoose} />
            <ChoseButtons onClickNo={onClickNo} onClickYes={onClickYes}/>
            </>) : <p>Carregando...</p>
            }
        </div>
    )
}


export default GetProfilePage;