import React from "react";
import { useNavigate } from "react-router-dom";
import * as MyRoutes from '../Coordinator'

export function CreateTripPage() {

    const navigate = useNavigate();

    return (
        <>
            <h1>Criar nova viagem</h1>
            <form action="">
                {/* <label htmlFor="tripName">Nome da viagem:</label> */}
                <input type="text" name="tripName" id="" placeholder="Nome da viagem"/>
                {/* <label htmlFor="planet">Planeta:</label> */}
                <input type="text" name="planet" id="" placeholder="Planeta"/>
                {/* <label htmlFor="date">Data:</label> */}
                <input type="date" name="date" id=""/>
                {/* <label htmlFor="discription">Descrição:</label> */}
                <input type="text" name="discription" id="" placeholder="Descrição"/>
                {/* <label htmlFor="duration">Duração:</label> */}
                <input type="number" name="duration" id="" placeholder="Duração em dias"/>
                <button>Criar</button>
            </form>
            <button onClick={() => {MyRoutes.goToBack(navigate)}}>Back</button>
        </>
    );
}