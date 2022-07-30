import axios from 'axios'
import * as All from '../Style'

export function UsersList (props) {

    const renderList = props.usersListProps.map(item => {

        const delUser = () =>{
            axios.delete(props.urlProp + "/" + item.id, props.headersProp).then((response) =>{
                // console.log() parei aqui
                alert('User vaporized.')
            }).catch((error) =>{
                alert("User survived.")
            })
        }

        return (
            <>
                <All.Span>
                    <li>{item.name}</li>
                    <button onClick={delUser}>x</button>
                </All.Span>
                
            </>
            
        )  
    })

    return(
        <All.Container>
            <h3>Usuários cadastrados:</h3>
            <ul>
                {renderList}
            </ul>
        </All.Container>
    )
}