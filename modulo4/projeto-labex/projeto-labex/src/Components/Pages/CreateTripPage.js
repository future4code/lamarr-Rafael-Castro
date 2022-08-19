import React from "react";
import { useNavigate } from "react-router-dom";
import * as MyRoutes from '../Coordinator'
import { planets } from "../Constants";
import useAuthenticated from "../Hooks/useAuthenticated"

export function CreateTripPage() {
    useAuthenticated()

    const navigate = useNavigate();

    const dateToday = new Date().toISOString().slice(0,10)

    const planetsOptions = planets.map(item => {
        return <option>{item}</option>
    })

    return (
        <>
            <h1>Criar nova viagem</h1>
            <form action="">
                {/* <label htmlFor="tripName">Nome da viagem:</label> */}
                <input
                    type="text"
                    name="tripName"
                    placeholder="Nome da viagem" 
                    pattern="[a-zA-Z]{5,}"
                    title="Mínimo de 5 letras" 
                    
                />
                <select name="planets" >
                    <option disabled selected value="">Escolha um planeta</option>
                    {planetsOptions}
                </select>
                {/* <label htmlFor="date">Data:</label> */}
                <input 
                    type="date" 
                    min={dateToday} 
                    name="date" />
                {/* <label htmlFor="discription">Descrição:</label> */}
                <input
                    type="text" 
                    name="description" 
                    pattern="[a-zA-Z]{30,}" 
                    title="Mínimo de 30 caractéres" 
                    placeholder="Descrição"
                    
                />
                {/* <label htmlFor="duration">Duração:</label> */}
                <input 
                    type="number" 
                    name="duration" 
                    min={50} 
                    title="Mínimo de 50 dias" 
                    placeholder="Duração em dias"
                    
                />
                <button>Criar</button>
            </form>
            <button onClick={() => {MyRoutes.goToBack(navigate)}}>Back</button>
        </>
    );
}