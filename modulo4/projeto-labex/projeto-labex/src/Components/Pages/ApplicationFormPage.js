import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useRequestData from "../Hooks/useRequestData"
import {countries, rootUrl, aluno} from '../Constants'
import { goToBack } from '../Coordinator'
import { useForm } from "../Hooks/useForm";
import { ApplicationFormContainer, 
        ColumnsContainer, 
        ColumnLeft, 
        ColumnRight, 
        ButtonsContainer } from "../../GlobalStyle";

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

    const applyToTrip = (e) => {
        e.preventDefault()

        const myHeader = {'Content-Type': 'application/json'}

        axios.post(`${rootUrl}${aluno}/trips/${form.tripId}/apply`, form, myHeader)
        .then(response => {
            alert('Aplicação realizada com sucesso.')
        }).catch(error => {
            console.log(error)
        })
        clear()
    }

    const tripsAvailable = dataTrips && dataTrips.map((item,index) => {
        return <option key={index} value={item.id}>{item.name} - {item.planet}</option>
    })

    const countrieslist = countries.map((item,index) => {
        return <option key={index} value={item}>{item}</option>
    })

    return (
        <ApplicationFormContainer>
            <h1>Formulário para Aplicação</h1>
                {isLoadingTrips&&'Carregando...'}
                {!isLoadingTrips&&dataTrips&&
                    <>
                        <form onSubmit={applyToTrip}>
                            <ColumnsContainer>
                                <ColumnLeft>
                                    <label htmlFor="name">Nome:</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        pattern="[a-zA-Z\s]{3,}"
                                        title="Mínimo de 3 caractéres" 
                                        placeholder="Nome"
                                        value={form.name}
                                        onChange={inputHandler}
                                        required
                                    />
                                    <label htmlFor="age">Idade:</label>
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
                                    <label htmlFor="applicationText">Texto de Candidatura:</label>
                                    <input
                                        type="text"
                                        name="applicationText" 
                                        pattern="[a-zA-Z\s]{30,}" 
                                        title="Mínimo de 30 caractéres" 
                                        placeholder="Texto de Candidatura"
                                        value={form.applicationText}
                                        onChange={inputHandler}
                                        required
                                    />
                                </ColumnLeft>
                                <ColumnRight>
                                    <label htmlFor="profession">Profissão:</label>
                                    <input 
                                        type="text" 
                                        name="profession" 
                                        pattern="[a-zA-Z\s]{10,}" 
                                        title="Mínimo de 10 caractéres"
                                        placeholder="Profissão"
                                        value={form.profession}
                                        onChange={inputHandler}
                                        required
                                    />
                                    <label htmlFor="country">País:</label>
                                    <select name="country" value={form.country} onChange={inputHandler} required>
                                        <option value="" disabled selected>País</option>
                                        {countrieslist}
                                    </select>
                                    <label htmlFor="tripId">Destino:</label>
                                    <select name="tripId" value={form.tripId} onChange={inputHandler} required>
                                        <option value="" disabled selected>Escolha a viagem</option>
                                        {tripsAvailable}
                                    </select>
                                </ColumnRight>
                            </ColumnsContainer>
                            <ButtonsContainer>
                                <button onClick={() => {goToBack(navigate)}}>Voltar</button>
                                <button>Enviar</button>
                            </ButtonsContainer>
                        </form>
                    </>
                }
                {!isLoadingTrips&&!dataTrips&&errorTrips}
        </ApplicationFormContainer>
    );
}