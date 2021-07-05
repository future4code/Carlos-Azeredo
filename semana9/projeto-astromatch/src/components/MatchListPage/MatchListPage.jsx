import React, { useEffect ,useState } from 'react'
import MatchListItem from './MatchListItem';
import styled from 'styled-components';
import axios from 'axios';

const LisContainer = styled.div`
padding: 8px;
`


function MatchListPage() {
  const [matches, setMatches] = useState([])


  useEffect (() =>{
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carlos-azeredo-molina/matches').then(response =>{
      console.log(response.data.matches)
      setMatches(response.data.matches)
    })
  }, []);

    return (
        <LisContainer>
            {matches.map((profile) => {
                return<MatchListItem profile={profile}/> 

            })}                
            
        </LisContainer>
    )
}

export default MatchListPage;