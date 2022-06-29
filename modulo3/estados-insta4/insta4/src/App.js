import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
return(
  <div className='MainContainer'>
          <Post
            nomeUsuario={'Paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
          <Post
            nomeUsuario={'Mel'}
            fotoUsuario={'https://picsum.photos/51'}
            fotoPost={'https://picsum.photos/200/151'}
          />
          <Post
            nomeUsuario={'Bela'}
            fotoUsuario={'https://picsum.photos/50'}
            fotoPost={'https://picsum.photos/200/149'}
          />
  </div>
)

}


export default App;
