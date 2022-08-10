import React from "react";
import { useNavigate } from "react-router-dom";
import * as MyRoutes from '../Coordinator'

export function TripsListPage() {

    const navigate = useNavigate();

    return (
        <>
            <h1>Trip List Page</h1>
            <button onClick={() => {MyRoutes.goToHomePage(navigate)}}>Home Page</button>
            <button onClick={() => {MyRoutes.goToAdminHomePage(navigate)}}>Admin Home Page</button>
            <button onClick={() => {MyRoutes.goToApplicationFormPage(navigate)}}>Application Form Page</button>
            <button onClick={() => {MyRoutes.goToCreateTripPage(navigate)}}>Create Trip Page</button>
            <button onClick={() => {MyRoutes.goToLoginPage(navigate)}}>Login</button>
            <button onClick={() => {MyRoutes.goToTripDetailsPage(navigate)}}>Trip Details Page</button>
            <button onClick={() => {MyRoutes.goToBack(navigate)}}>Back</button>
        </>
    );
}