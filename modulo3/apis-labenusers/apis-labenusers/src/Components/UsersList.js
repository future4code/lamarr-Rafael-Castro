import axios from 'axios'
import { useEffect, useState } from 'react'
import * as All from '../Style'

export function UsersList (props) {

    const [searchInput, setSearchInput] = useState('')
    const [displaySearchResults, setDisplaySearchResults] = useState(false)
    const [searchResults, setSearchResults] = useState([])

    const getSearchInput = (e) =>{
        setSearchInput(e.target.value)
    }

    const searchUser = () => {
        axios.get(props.urlProp+
            '/search?name='+searchInput,
            props.headersProp)
            .then((response) =>{
                for (let i = 0; i < response.data.length; i++) {
                    setSearchResults([response.data[i].name])
                }
            })
        setDisplaySearchResults(true)
        setSearchInput('')
    }


    const renderSearchResults = searchResults.map(item => {
        return(
            <>
                <li>{item}</li>
            </>
        )
    })

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
            {/* Search Input */}
            <label htmlFor='search'>Search:</label>
            <input type='text' id="search"
                value={searchInput}
                onChange={getSearchInput}>
            </input>
            <button onClick={searchUser}>Search</button>

            {/* Display registered users */}
            {!displaySearchResults &&
                <>
                    <h3>Usuários cadastrados:</h3>
                    <ul>
                        {renderList}
                        <button onClick={() => props.pageChangerProp('logup')}>Back</button>
                    </ul>
                </>
            }

            {/* Search Results */}
            {displaySearchResults &&
                <>
                    <h3>Resultado da busca:</h3>
                    {renderSearchResults}
                    <button onClick={() => setDisplaySearchResults(!displaySearchResults)}>Back</button>
                </>
            }
        </All.Container>
    )
}