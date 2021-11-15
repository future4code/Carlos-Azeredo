import React, { useContext } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import { ButtonsContainer, CardsContainer, StyledButton } from "./styled";
import GenreFilter from "../../components/GenreFilter/GenreFilter";

const HomePage = () => {
  const { movies, currentPage, setCurrentPage } = useContext(GlobalStateContext)
  console.log(currentPage)

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  const nextPage = () => {
    if (Number(currentPage) < 500) {
      setCurrentPage((Number(currentPage) + 1).toString())
      scrollToTop()
    }
  }

  const previousPage = () => {
    if (Number(currentPage) > 1) {
      setCurrentPage((Number(currentPage) - 1).toString())
      scrollToTop()
    }
  }

  const firstPage = () => {
    if (Number(currentPage) > 1) {
      setCurrentPage("1")
      scrollToTop()
    }
  }

  return (
    <div>      
      <GenreFilter />
      <CardsContainer>
        <MovieCard movies={movies} />
      </CardsContainer>

      {
        currentPage == 1 ?
          <ButtonsContainer>
            <StyledButton onClick={() => nextPage()}>Próxima Página</StyledButton>
          </ButtonsContainer> :
          <ButtonsContainer>
            <StyledButton onClick={() => firstPage()}>Primeira Página</StyledButton>
            <StyledButton onClick={() => previousPage()}>Página Anterior</StyledButton>
            <StyledButton onClick={() => nextPage()}>Próxima Página</StyledButton>
          </ButtonsContainer>
      }

    </div>
  );
}

export default HomePage;