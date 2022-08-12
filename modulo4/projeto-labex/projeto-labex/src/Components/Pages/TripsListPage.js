import React from "react";
import { useNavigate } from "react-router-dom";
import * as MyRoutes from '../Coordinator';
import useRequestData from "../Hooks/useRequestData"
import {rootUrl} from '../Constants'

export function TripsListPage() {

    const navigate = useNavigate();
    let [dataTrips, isLoadingTrips, errorTrips] = useRequestData(`${rootUrl}Rafael/trips`)

    const renderTrips = dataTrips && dataTrips.map((item) => {
        return <li>{item.name}</li>
    })

    return (
        <>
            <h1>Lista de Viagens Disponíveis</h1>
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
            <button onClick={() => {MyRoutes.goToApplicationFormPage(navigate)}}>Aplicar para uma viagem</button>
        </>
    );
}