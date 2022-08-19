import React from "react";
import { useNavigate } from "react-router-dom";
import * as MyRoutes from '../Coordinator'
import useRequestData from "../Hooks/useRequestData"
import {rootUrl, aluno} from '../Constants'
import useAuthenticated from "../Hooks/useAuthenticated"

export function AdminHomePage() {
    useAuthenticated()
    
    const navigate = useNavigate();
    
    const [dataTrips, isLoadingTrips, errorTrips] = useRequestData(`${rootUrl}${aluno}/trips`)

    const tripDetails = (id) => {
        localStorage.setItem("id", id)
        navigate(`/admin/trips/${id}`)
    }

    const renderTrips = dataTrips && dataTrips.map((item, index) => {
        return <li key={index}>{item.name} <button onClick={() => {tripDetails(item.id)}}>Detalhes</button> <button>Remover</button></li>
    })
    
    return (
        <>
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
            <button onClick={() => {MyRoutes.goToBack(navigate)}}>Back</button>
            <button onClick={() => {MyRoutes.goToCreateTripPage(navigate)}}>Criar nova viagem</button>
        </>
    );
}