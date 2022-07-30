import axios from 'axios'
import * as All from '../Style'

export function UsersList (props) {

    const renderList = props.usersListProps.map(item => {

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

        return (
            <>
                <All.Span>
                    <li>{item.name}</li>
                    {/* <button onClick={() => delUser}>x</button> */}
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
                <button onClick={() => props.pageChangerProp('logup')}>Back</button>
            </ul>
        </All.Container>
    )
}