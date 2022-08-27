import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToBack, goToCreateTripPage } from '../Coordinator'
import useRequestData from "../Hooks/useRequestData"
import {rootUrl, aluno} from '../Constants'
import useAuthenticated from "../Hooks/useAuthenticated"
import { AdminTripsListContainer } from "../../GlobalStyle";

export function AdminHomePage() {
    useAuthenticated()
    
    const navigate = useNavigate();
    
    const [dataTrips, isLoadingTrips, errorTrips] = useRequestData(`${rootUrl}${aluno}/trips`)

    const tripDetails = (id) => {
        localStorage.setItem("id", id)
        navigate(`/admin/trips/${id}`)
    }

    const renderTrips = dataTrips && dataTrips.map((item, index) => {

        const delTrip = (id) => {
            const myHeader = {
                headers: {
                    'Content-Type': 'application/json',
                    'auth': localStorage.getItem("token")
                }
            }
            
            axios.delete(`${rootUrl}${aluno}/trips/${id}`, myHeader)
            .then(response => {
                alert("Viagem excluída.")
            }).catch(error => {
                alert('Deu ruim.')
            })
        }

        return <li key={index}>{item.name}
                    <button onClick={() => {tripDetails(item.id)}}>Detalhes</button>
                    <button onClick={() => {delTrip(item.id)}}>Remover</button>
                </li>
    })
    
    return (
        <AdminTripsListContainer>
            <h1>Área Administrativa</h1>
            {isLoadingTrips&&'Carregando...'}
            {!isLoadingTrips&&dataTrips&&
                <>
                    <ul>
                        {renderTrips}
                    </ul>
                </>
            }
            {!isLoadingTrips&&!dataTrips&&errorTrips}
            <div>
                <button onClick={() => {goToBack(navigate)}}>Voltar</button>
                <button onClick={() => {goToCreateTripPage(navigate)}}>Criar nova viagem</button>
            </div>
        </AdminTripsListContainer>
    );
}