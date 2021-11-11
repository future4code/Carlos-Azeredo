import HomePage from './pages/HomePage'
import { createGlobalStyle } from 'styled-components'


function App() {


  const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2? family = Montserrat: ital, wght @ 0,200; 1,300 & display = swap');
    * {
        margin: 1;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }`

  return (
    <div>
    
      <GlobalStyle />
      <HomePage />
    </div>
  );
}

export default App;