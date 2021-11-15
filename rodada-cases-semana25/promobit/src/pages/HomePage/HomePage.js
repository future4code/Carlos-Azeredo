import React, { useContext } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import Header from "../../components/Header/Header"
import { CardsContainer } from "./styled";


const HomePage = () => {
    const { movies } = useContext(GlobalStateContext)
  
    return (
      <div>
        <Header />
        <CardsContainer>
          <MovieCard movies={movies} />
        </CardsContainer>
      </div>
    );
  }
  
  export default HomePage;
