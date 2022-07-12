import React, {useState} from 'react';
import Post from './components/Post/Post';
import {MainContainer} from './style'


function App() {
  const [inputName, setInputName] = useState('')
  const [inputUserPic, setInputUserPic] = useState('')
  const [inputPostPic, setInputPostPic] = useState('')
  const [postagens, setPostagens] = useState([
    {nomeUsuario: 'Paulinha', fotoUsuario: 'https://picsum.photos/50/50', fotoPost: 'https://picsum.photos/200/150'},
    {nomeUsuario: 'Mel', fotoUsuario: 'https://picsum.photos/51', fotoPost: 'https://picsum.photos/200/151'},
    {nomeUsuario: 'Bela', fotoUsuario: 'https://picsum.photos/50', fotoPost: 'https://picsum.photos/200/149'}
  ])

  const handleInputName = (event) =>{
    setInputName(event.target.value)
  }
  const handleInputUserPic = (event) =>{
    setInputUserPic(event.target.value)
  }
  const handleInputPostPic = (event) =>{
    setInputPostPic(event.target.value)
  }

  const addPostagem = (e) => {
    e.preventDefault()
    let newPost = {nomeUsuario: inputName, fotoUsuario:inputUserPic, fotoPost: inputPostPic}
    let newPostagens = [...postagens, newPost]
    setPostagens(newPostagens)
  }

  let postList = postagens.map((element, index) =>{
    return <Post key={index} 
    nomeUsuario={element.nomeUsuario}
    fotoUsuario={element.fotoUsuario}
    fotoPost={element.fotoPost}></Post>
  })

return(
  <MainContainer>
    <form>
      <label htmlFor='name'>Nome:</label>
      <input id='name' value={inputName} onChange={handleInputName}></input>
      <label htmlFor='userPic'>Url foto usuário:</label>
      <input id='userPic' value={inputUserPic} onChange={handleInputUserPic}></input>
      <label htmlFor='postPic'>Url postagem:</label>
      <input id='postPic' value={inputPostPic} onChange={handleInputPostPic}></input>
      <button onClick={addPostagem}>Adicionar</button>
    </form>
    {postList}
  </MainContainer>
)}

export default App;
