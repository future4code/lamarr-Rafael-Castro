import React from "react";
import { useNavigate } from "react-router-dom";
import { aluno, rootUrl } from "../Constants"
import * as MyRoutes from '../Coordinator'
import useAuthenticated from "../Hooks/useAuthenticated"

export function TripDetailsPage() {
    useAuthenticated()

    const navigate = useNavigate();

    // const tripDetails = axios.get(`${rootUrl}${aluno}/trip/`)

    return (
        <>
            <h1>Trip Details Page</h1>
            


            <button onClick={() => {MyRoutes.goToBack(navigate)}}>Back</button>
        </>
    );
}