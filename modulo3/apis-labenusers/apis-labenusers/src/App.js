import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css';
import { LogUpForm } from './Components/LogUpForm';
import { UsersList } from './Components/UsersList';


function App() {

  const [pageChoser, setPageChoser] = useState('logup')
  const [inputName, setInputName] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [usersList, setUsersList] = useState([])

  const pageChanger = (data) => {
    setPageChoser(data)
  }

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

  const getUsers = () => {
    axios.get(url, myHeaders).then((response) => {
      setUsersList(response.data)
    }).catch((error) =>{
      console.log(error.response)
    })
  }

  useEffect(() => {
    getUsers()
  }, [usersList])

  return (
    <>
      {pageChoser === 'logup' &&
        <LogUpForm 
        urlProp={url}
        headersProp={myHeaders}
        bodyProp={body}
        inputNameProp={inputName}
        inputEmailProp={inputEmail}
        setInputNameProp={setInputName}
        setInputEmailProp={setInputEmail}
        pageChangerProp={pageChanger}
        />
      }
      
      {pageChoser === 'userslist' &&
        <UsersList
        usersListProps={usersList}
        urlProp={url}
        headersProp={myHeaders}
        setUsersListProp={setUsersList}
        pageChangerProp={pageChanger}
      />
      }
      
    </>
  );
}

export default App;
