import React from "react";
import { useNavigate } from "react-router-dom";
import * as MyRoutes from '../Coordinator'

export function HomePage() {
    const navigate = useNavigate();

    return (
        <>
            <h1>Homepage</h1>
            <button onClick={() => {MyRoutes.goToLoginPage(navigate)}}>Área Administrativa</button>
            <button onClick={() => {MyRoutes.goToTripsListpage(navigate)}}>Lista de Viagens</button>
        </>
    );
}