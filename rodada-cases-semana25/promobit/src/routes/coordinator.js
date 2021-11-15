export const goToDetails = (history, movieId) => {
    history.push(`/movie/${movieId}`)
    
} 

export const goToHome = (history) => {
	history.push(`/`);
}

export const goToSearchPage = (history, movie, page) => {
	if (!page) {
		page = 1;
	}
	history.push(`/search/${movie}/${page}`)}