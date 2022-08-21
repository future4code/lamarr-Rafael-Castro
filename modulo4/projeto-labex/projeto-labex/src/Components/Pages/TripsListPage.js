import React from "react";
import { useNavigate } from "react-router-dom";
import { goToBack, goToApplicationFormPage } from '../Coordinator';
import useRequestData from "../Hooks/useRequestData"
import { rootUrl, aluno } from '../Constants'

export function TripsListPage() {

    const navigate = useNavigate();
    let [dataTrips, isLoadingTrips, errorTrips] = useRequestData(`${rootUrl}${aluno}/trips`)

    const renderTrips = dataTrips && dataTrips.map((item, index) => {
        return <li key={index}>{item.name}</li>
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
            <button onClick={() => {goToBack(navigate)}}>Voltar</button>
            <button onClick={() => {goToApplicationFormPage(navigate)}}>Aplicar para uma viagem</button>
        </>
    );
}