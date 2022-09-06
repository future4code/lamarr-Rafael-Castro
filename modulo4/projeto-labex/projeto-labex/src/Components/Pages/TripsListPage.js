import React from "react";
import { useNavigate } from "react-router-dom";
import { goToBack, goToApplicationFormPage } from '../Coordinator';
import useRequestData from "../Hooks/useRequestData"
import { rootUrl, aluno } from '../Constants'
import { TripsListContainer } from "../../GlobalStyle";

export function TripsListPage() {

    const navigate = useNavigate();
    let [dataTrips, isLoadingTrips, errorTrips] = useRequestData(`${rootUrl}${aluno}/trips`)

    const renderTrips = dataTrips && dataTrips.map((item, index) => {
        return <li key={index}>{item.name}</li>
    })

    return (
        <TripsListContainer>
            <h1>Viagens Disponíveis</h1>
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
                <button onClick={() => {goToApplicationFormPage(navigate)}}>Aplicar para uma viagem</button>
            </div>
        </TripsListContainer>
    );
}