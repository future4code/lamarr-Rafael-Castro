import React from "react";
import { useNavigate } from "react-router-dom";
import * as MyRoutes from '../Coordinator'

export function ApplicationFormPage() {

    const navigate = useNavigate();
    
    return (
        <>
            <h1>Application Form Page</h1>
            <button onClick={() => {MyRoutes.goToHomePage(navigate)}}>Home Page</button>
            <button onClick={() => {MyRoutes.goToAdminHomePage(navigate)}}>Admin Home Page</button>
            <button onClick={() => {MyRoutes.goToCreateTripPage(navigate)}}>Create Trip</button>
            <button onClick={() => {MyRoutes.goToLoginPage(navigate)}}>Login</button>
            <button onClick={() => {MyRoutes.goToTripDetailsPage(navigate)}}>Trip Details</button>
            <button onClick={() => {MyRoutes.goToTripsListpage(navigate)}}>Trips List</button>
            <button onClick={() => {MyRoutes.goToBack(navigate)}}>Back</button>
        </>
    );
}