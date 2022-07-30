import axios from 'axios'
import { useEffect } from 'react'
import * as All from '../Style'

export function UsersList (props) {

    const renderList = props.usersListProp.map(item => {

        const delUser = () =>{
            if (window.confirm('Eliminate user?')) {
                axios.delete(props.urlProp + "/" + item.id, props.headersProp).then((response) =>{
                    alert('User vaporized.')
                }).catch((error) =>{
                    alert("User survived.")
                })
            }else {
                alert("User survived.")
            }
        }

        const getUserDetail = () => {
            axios.get(props.urlProp + '/' + item.id, props.headersProp).then((reponse) => {
                props.setUserDetailsProp([{id: item.id, name: reponse.data.name, email: reponse.data.email}])
                props.pageChangerProp('userdetails')
            })
        }

        return (
            <All.Span>
                <li onClick={getUserDetail}>{item.name}</li>
                <button onClick={delUser}>x</button>
            </All.Span>
        )  
    })

    return(
        <All.Container>
            <h3>Usuários cadastrados:</h3>
            <ul>
                {renderList}
                <button onClick={() => props.pageChangerProp('logup')}>Back</button>
            </ul>
        </All.Container>
    )
}