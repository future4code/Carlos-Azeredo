import React, {useEffect, useState}  from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard";
import styled from 'styled-components'

const MainContainer = styled.main`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10px;
`


// lista de pokemons que está sendo guardada no estado
// nome do pokemon guardado no estado, assim que o usuário
// escolhe um nome no dropdown

  export default function App () {

    const [pokeList, setPokeList] = useState([])
    const [pokeName, setPokeName] = useState('')

  // método que roda após a montagem do componente
  // função axios que está batendo na API e buscando 151 pokemons
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokeList(response.data.results)
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  const changePokeName = event => {
    setPokeName(event.target.value)
  };

 
  return (
    <MainContainer>
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </MainContainer>
  );
}


