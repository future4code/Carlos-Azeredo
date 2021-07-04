import React from 'react'
import MatchListItem from './MatchListItem';
import styled from 'styled-components';

const LisContainer = styled.div`
padding: 8px;
`


function MatchListPage() {
const matches =  [
    {
      "id": "71gMbZs2txS9LDvGK5Ew",
      "age": 26,
      "name": "Brooke Lynn Hytes",
      "photo": "https://vignette.wikia.nocookie.net/logosrupaulsdragrace/images/0/03/Brooke_Lynn_Hytes.jpg/revision/latest?cb=20190124191352",
      "bio": "Amo cachorros e sair para dançar. Procuro alguém animado e sem neuras."
    }
  ]

    return (
        <LisContainer>
            {matches.map((profile) => {
                return<MatchListItem profile={profile}/> 

            })}                
            
        </LisContainer>
    )
}

export default MatchListPage;