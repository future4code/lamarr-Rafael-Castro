import axios from 'axios'
import * as All from '../Style'

export function LogUpForm (props){

    const getNameInput = (e) =>{
        props.setInputNameProp(e.target.value)
    }
    const getEmailInput = (e) =>{
        props.setInputEmailProp(e.target.value)
    }

    const createUser = (e) => {
        e.preventDefault()
        axios.post(props.urlProp, props.bodyProp, props.headersProp).then(() =>{
            props.setInputNameProp('')
            props.setInputEmailProp('')
            alert("User added.")
        }).catch((error) =>{
            alert("Something went wrong!")
        })
    }

    return(
        <All.Container>
            <h3>Cadastro de Usuário</h3>
            <label htmlFor='name'>Nome: </label>
            <input type='text' id="name" value={props.inputNameProp} onChange={getNameInput}></input>
            <label htmlFor='email'>Email: </label>
            <input type='email' id="email" value={props.inputEmailProp} onChange={getEmailInput}></input>
            <button onClick={createUser}>Enviar</button>
            <button onClick={() => props.pageChangerProp('userslist')}>Users List</button>
        </All.Container>
    )
}