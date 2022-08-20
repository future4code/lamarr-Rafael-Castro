import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useRequestData from "../Hooks/useRequestData"
import {countries, rootUrl, aluno} from '../Constants'
import * as MyRoutes from '../Coordinator'
import { useForm } from "../Hooks/useForm";

export function ApplicationFormPage() {

    const navigate = useNavigate();

    // Load all trips names so they can be used on select element
    let [dataTrips, isLoadingTrips, errorTrips] = useRequestData(`${rootUrl}${aluno}/trips`)

    //  UseForm
    const [form, inputHandler, clear] = useForm({name:"", 
                                                age:"", 
                                                applicationText:"", 
                                                profession:"", 
                                                country:"",
                                                tripId:""})

    const applyToTrip = (id) => {
        axios.post(`${rootUrl}${aluno}/trips/${id}/apply`)
        // .then(())
    }

    const tripsAvailable = dataTrips && dataTrips.map((item) => {
        return <option value={item.id}>{item.name} - {item.planet}</option>
    })

    const countrieslist = countries.map(item => {
        return <option>{item}</option>
    })

    return (
        <>
            <h1>Formulário para Aplicação</h1>
                {isLoadingTrips&&'Carregando...'}
                {!isLoadingTrips&&dataTrips&&
                    <>
                        <form action="">
                            {/* <label htmlFor="name">Nome:</label> */}
                            <input 
                                type="text" 
                                name="name" 
                                pattern="[a-zA-Z]{3,}"
                                title="Mínimo de 3 caractéres" 
                                placeholder="Nome"
                                value={form.name}
                                onChange={inputHandler}
                                required
                            />
                            {/* <label htmlFor="age">Idade:</label> */}
                            <input 
                                type="number" 
                                name="age" 
                                min={18} 
                                title="Idade mínima 18 anos" 
                                placeholder="Idade"
                                value={form.age}
                                onChange={inputHandler}
                                required
                            />
                            {/* <label htmlFor="text">Texto de Candidatura:</label> */}
                            <input
                                type="text"
                                name="applicationText" 
                                pattern="[a-zA-Z]{30,}" 
                                title="Mínimo de 30 caractéres" 
                                placeholder="Texto de Candidatura"
                                value={form.applicationText}
                                onChange={inputHandler}
                                required
                            />
                            {/* <label htmlFor="profession">Profissão:</label> */}
                            <input 
                                type="text" 
                                name="profession" 
                                pattern="[a-zA-Z]{10,}" 
                                title="Mínimo de 10 caractéres"
                                placeholder="Profissão"
                                value={form.profession}
                                onChange={inputHandler}
                                required
                            />
                            <select name="country" required>
                                <option disabled selected value="">País</option>
                                {countrieslist}
                            </select>
                            <select name="tripId" required>
                                <option disabled selected>Escolhe a viagem</option>
                                {tripsAvailable}
                            </select>
                            <button>Enviar</button>
                        </form>
                        <button onClick={() => {MyRoutes.goToBack(navigate)}}>Back</button>
                    </>
                }
                {!isLoadingTrips&&!dataTrips&&errorTrips}
        </>
    );
}