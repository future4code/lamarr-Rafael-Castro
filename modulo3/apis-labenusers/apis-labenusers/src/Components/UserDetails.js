import axios from 'axios'
import * as All from '../Style'

export function UserDetails (props){

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

        return(
            <All.Container>
                <h3>User Details:</h3>
                    <li>Name: {item.name}</li>
                    <li>Email: {item.email}</li>
                    <button onClick={delUser}>Eliminate</button>
                    <button onClick={() => props.pageChangerProp('userslist')}>Back</button>
            </All.Container>
        )
    })

    return(
        <>
            {renderUser}
        </>
    )
}