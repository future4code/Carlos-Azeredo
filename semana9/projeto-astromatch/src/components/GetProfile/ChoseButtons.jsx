import React from 'react'
import styled from 'styled-components';

const ButtonContainer = styled.div`
display:flex;
justify-content:space-around;
flex-grow:1;
align-items:center;
`

function ChoseButtons() {
    return (
        <ButtonContainer>
           <button>Sim</button>
            <button>Não</button>
        </ButtonContainer>
    )
}


export default ChoseButtons;