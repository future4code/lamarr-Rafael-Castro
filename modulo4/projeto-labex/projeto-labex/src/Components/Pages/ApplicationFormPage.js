import React from "react";
import { useNavigate } from "react-router-dom";
import useRequestData from "../Hooks/useRequestData"
import {rootUrl} from '../Constants'
import * as MyRoutes from '../Coordinator'

export function ApplicationFormPage() {

    const navigate = useNavigate();

    let [dataTrips, isLoadingTrips, errorTrips] = useRequestData(`${rootUrl}Rafael/trips`)

    const tripsAvailable = dataTrips && dataTrips.map((item) => {
        return <option>{item.name}</option>
    })

    return (
        <>
            <h1>Formulário para Aplicação</h1>
                {isLoadingTrips&&'Carregando...'}
                {!isLoadingTrips&&dataTrips&&
                    <>
                        <form action="">
                            <select name="" id="">
                                {tripsAvailable}
                            </select>
                            {/* <label htmlFor="name">Nome:</label> */}
                            <input type="text" name="name" id="" placeholder="Nome"/>
                            {/* <label htmlFor="age">Idade:</label> */}
                            <input type="number" name="name" id="" placeholder="Idade"/>
                            {/* <label htmlFor="text">Texto de Candidatura:</label> */}
                            <input type="text" name="name" id="" placeholder="Texto de Candidatura"/>
                            {/* <label htmlFor="profession">Profissão:</label> */}
                            <input type="text" name="profession" id="" placeholder="Profissão"/>
                            {/* <label htmlFor="country">País de origem:</label> */}
                            <input type="text" name="country" id="" placeholder="País de origem"/>
                            <button>Enviar</button>
                        </form>
                        <button onClick={() => {MyRoutes.goToBack(navigate)}}>Back</button>
                    </>
                }
                {!isLoadingTrips&&!dataTrips&&errorTrips}

            {/* <button onClick={() => {MyRoutes.goToHomePage(navigate)}}>Home Page</button>
            <button onClick={() => {MyRoutes.goToAdminHomePage(navigate)}}>Admin Home Page</button>
            <button onClick={() => {MyRoutes.goToCreateTripPage(navigate)}}>Create Trip</button>
            <button onClick={() => {MyRoutes.goToLoginPage(navigate)}}>Login</button>
            <button onClick={() => {MyRoutes.goToTripDetailsPage(navigate)}}>Trip Details</button>
            <button onClick={() => {MyRoutes.goToTripsListpage(navigate)}}>Trips List</button> */}
        </>
    );
}