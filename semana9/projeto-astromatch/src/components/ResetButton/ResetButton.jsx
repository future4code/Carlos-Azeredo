import axios from 'axios';
import React from 'react'

function ResetButton() {
    const onclickReset = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carlos-azeredo-molina/clear').then(response =>{
        console.log(response)
        })

    }
    
    
    return (
        <div>
            <button onClick={onclickReset}> Resetar Curtidas e Matches</button>
        </div>
    )
}



export default ResetButton;
