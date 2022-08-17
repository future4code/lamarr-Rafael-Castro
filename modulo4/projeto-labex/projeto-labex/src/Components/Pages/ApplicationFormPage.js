import React from "react";
import { useNavigate } from "react-router-dom";
import useRequestData from "../Hooks/useRequestData"
import {countries, rootUrl, aluno} from '../Constants'
import * as MyRoutes from '../Coordinator'

export function ApplicationFormPage() {

    const navigate = useNavigate();

    let [dataTrips, isLoadingTrips, errorTrips] = useRequestData(`${rootUrl}${aluno}/trips`)

    const tripsAvailable = dataTrips && dataTrips.map((item) => {
        return <option value={item.id}>{item.name} - {item.planet}</option>
    })

    const countrieslist = countries.map(item => {
        return <option>{item}</option>
    })

    const applyToTrip = () => {
        // axios.post(rootUrl)
    }

    return (
        <>
            <h1>Formulário para Aplicação</h1>
                {isLoadingTrips&&'Carregando...'}
                {!isLoadingTrips&&dataTrips&&
                    <>
                        <form action="">
                            <select name="" id="">
                                <option disabled selected>Escolhe a viagem</option>
                                {tripsAvailable}
                            </select>
                            {/* <label htmlFor="name">Nome:</label> */}
                            <input 
                                type="text" 
                                name="name" 
                                pattern="[a-zA-Z]{3,}"
                                title="Mínimo de 3 caractéres" 
                                placeholder="Nome"
                            />
                            {/* <label htmlFor="age">Idade:</label> */}
                            <input type="number" name="name" min={18} title="Idade mínima 18 anos" placeholder="Idade"/>
                            {/* <label htmlFor="text">Texto de Candidatura:</label> */}
                            <input
                                type="text"
                                name="name" 
                                pattern="[a-zA-Z]{30,}" 
                                title="Mínimo de 30 caractéres" 
                                placeholder="Texto de Candidatura"
                            />
                            {/* <label htmlFor="profession">Profissão:</label> */}
                            <input 
                                type="text" 
                                name="profession" 
                                pattern="[a-zA-Z]{10,}" 
                                title="Mínimo de 10 caractéres"
                                placeholder="Profissão"/>
                            <select name="" id="">
                                <option disabled selected value="">País</option>
                                {countrieslist}
                            </select>
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