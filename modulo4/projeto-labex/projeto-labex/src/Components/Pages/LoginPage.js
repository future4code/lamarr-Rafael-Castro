import React from "react";
import { useNavigate } from "react-router-dom";
import * as MyRoutes from '../Coordinator'

export function LoginPage() {

    const navigate = useNavigate();

    return (
        <>
            <h1>Login</h1>
            <form action="">
                {/* <label htmlFor="email">Email:</label> */}
                <input type="email" name="email" id="" placeholder="Email"/>
                {/* <label htmlFor="password">Email:</label> */}
                <input type="password" name="password" id="" placeholder="Senha"/>
                <button onClick={() => {MyRoutes.goToAdminHomePage(navigate)}}>Acessar</button>
            </form>
            <button onClick={() => {MyRoutes.goToBack(navigate)}}>Back</button>
        </>
    );
}