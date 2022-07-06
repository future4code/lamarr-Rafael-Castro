import React from 'react';
import Post from './components/Post/Post';
import {MainContainer} from './style'


function App() {

  let postagens = [
    {nomeUsuario: 'Paulinha', fotoUsuario: 'https://picsum.photos/50/50', fotoPost: 'https://picsum.photos/200/150'},
    {nomeUsuario: 'Mel', fotoUsuario: 'https://picsum.photos/51', fotoPost: 'https://picsum.photos/200/151'},
    {nomeUsuario: 'Bela', fotoUsuario: 'https://picsum.photos/50', fotoPost: 'https://picsum.photos/200/149'}
  ]
  
  let postList = postagens.map((element, index) =>{
    return <Post key={index} 
    nomeUsuario={element.nomeUsuario}
    fotoUsuario={element.fotoUsuario}
    fotoPost={element.fotoPost}></Post>
  })

return(
  <MainContainer className='MainContainer'>
    {postList}
    {console.log(postagens)}
  </MainContainer>
)}

export default App;
