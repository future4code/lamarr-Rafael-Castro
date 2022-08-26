import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage, goToTripsListpage } from '../Coordinator'
import { HomePageMain } from "../../GlobalStyle";

export function HomePage() {
    const navigate = useNavigate();

    return (
        <HomePageMain>
            <h1>Labe<span>X</span></h1>
            <a href='/admin/trips/list'>Área Administrativa</a>
            <a href='/trips/list'>Lista de Viagens</a>
        </HomePageMain>
    );
}