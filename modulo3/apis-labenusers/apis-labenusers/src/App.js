import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css';
import * as All from './Style'

function App() {
  
  // const mock = {name: 'Mia', email: 'mia@malkova.com'}

  const [inputName, setInputName] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [usersList, setUsersList] = useState([])

  const getNameInput = (e) =>{
    setInputName(e.target.value)
  }
  const getEmailInput = (e) =>{
    setInputEmail(e.target.value)
  }

  useEffect(() => {
    getUsers()
  }, [])

  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
  const myHeaders =  {
    headers:{
      Authorization: "rafael-castro-lamarr"
    }
  }

  const body = {
    "name": inputName,
    "email": inputEmail
  }

  const createUser = (e) => {
    e.preventDefault()
    axios.post(url, body, myHeaders).then(() =>{
      alert("User added.")
    }).catch((error) =>{
      alert("Something went wrong!")
    })
  }

  const getUsers = () => {
    axios.get(url, myHeaders).then((response) => {
      setUsersList(response.data)
      console.log(response)
    }).catch((error) =>{
      console.log(error.response)
    })
  }

  const renderList = usersList.map((item, key) => <li>{item.name}</li>)

  return (
    <>
      <All.Container>
        <h3>Cadastro de Usuário</h3>
        <label htmlFor='name'>Nome: </label>
        <input type='text' id="name" value={inputName} onChange={getNameInput}></input>
        <label htmlFor='email'>Email: </label>
        <input type='email' id="email" value={inputEmail} onChange={getEmailInput}></input>
        <button onClick={createUser}>Enviar</button>
      </All.Container>
      <All.Container>
      <h3>Lista de usuários</h3>
      <ul>
        {renderList}
      </ul>
      </All.Container>
    </>
  );
}

export default App;
