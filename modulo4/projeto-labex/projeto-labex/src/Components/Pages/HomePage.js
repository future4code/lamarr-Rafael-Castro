import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage, goToTripsListpage } from '../Coordinator'

export function HomePage() {
    const navigate = useNavigate();

    return (
        <>
            <h1>Homepage</h1>
            <button onClick={() => {goToLoginPage(navigate)}}>Área Administrativa</button>
            <button onClick={() => {goToTripsListpage(navigate)}}>Lista de Viagens</button>
        </>
    );
}