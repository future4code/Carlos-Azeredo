import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'João'}
          fotoUsuario={'https://picsum.photos/49/50'}
          fotoPost={'https://picsum.photos/200/149'}
        />
        <Post
          nomeUsuario={'Pedro'}
          fotoUsuario={'https://picsum.photos/48/50'}
          fotoPost={'https://picsum.photos/200/148'}
        />
      </MainContainer>
      
    );
  }
}

export default App;
