import axios from 'axios'
import { useEffect, useState } from 'react'
import * as All from '../Style'

export function UserDetails (props){

    const [editUserForm, setEditUserForm] = useState(false)

    const getNameInput = (e) =>{
        props.setInputNameProp(e.target.value)
    }
    const getEmailInput = (e) =>{
        props.setInputEmailProp(e.target.value)
    }
    
    const renderUser = props.userDetailsProp.map(item => {

        const delUser = () =>{
            if (window.confirm('Eliminate user?')) {
                axios.delete(props.urlProp + "/" + item.id, props.headersProp).then((response) =>{
                    alert('User vaporized.')
                    props.pageChangerProp('userslist')
                }).catch((error) =>{
                    alert("User survived.")
                })
            }else {
                alert("User survived.")
            }
        }

        const editUser = () => {
            const body = {
                "name": props.inputNameProp,
                "email": props.inputEmailProp
                }
            axios.put(props.urlProp + "/" + item.id, body, props.headersProp).then(() =>{
                alert('User updated.')
                setEditUserForm(!editUserForm)
                props.setInputNameProp('')
                props.setInputEmailProp('')
                axios.get(props.urlProp + '/' + item.id, props.headersProp).then((response) => {
                    props.setUserDetailsProp([{id: item.id, name: response.data.name, email: response.data.email}])
                })
            }).catch((error) =>{
                alert("No changes made.")
            })
        }


        return(
            <All.Container>
                <h3>User Details:</h3>
                    <li>Name: {item.name}</li>
                    <li>Email: {item.email}</li>
                    <button onClick={delUser}>Eliminate</button>
                    {!editUserForm &&
                        <button onClick={() => setEditUserForm(!editUserForm)}>Edit User</button>
                    }
                    <button onClick={() => props.pageChangerProp('userslist')}>Back</button>
                    {editUserForm &&
                        <>
                            <h4>Edit User</h4>
                            <label htmlFor='name'>Nome: </label>
                            <input type='text' id="name" value={props.inputNameProp} onChange={getNameInput}></input>
                            <label htmlFor='email'>Email: </label>
                            <input type='text' id="email" value={props.inputEmailProp} onChange={getEmailInput}></input>
                            <button onClick={editUser}>Save</button>
                        </>
                    }
            </All.Container>
        )
    })

    return(
        <>
            {renderUser}
        </>
    )
}