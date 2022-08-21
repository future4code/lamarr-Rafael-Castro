import React from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { goToBack } from '../Coordinator'
import { useForm } from "../Hooks/useForm";
import { rootUrl, aluno } from "../Constants";


export function LoginPage() {

    const navigate = useNavigate();

    // UseForm
    const [form, inputHandler, clear] = useForm({email: "", password: ""})

    /* Collects form inputs data, get token from Login endpoint, 
    saves it to localStorage */
    const Login = (e) => {
        e.preventDefault()
        axios.post(`${rootUrl}${aluno}/login`, form)
            .then((response) => {
                localStorage.setItem("token", response.data.token)
                navigate("/admin/trips/list")
            })
            .catch((error) => {
                alert(error.response.data.message)
                navigate("/")
            })
            
        clear()
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={Login}>
                {/* <label htmlFor="email">Email:</label> */}
                <input 
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    value={form.email}
                    onChange={inputHandler}
                    required
                />
                {/* <label htmlFor="password">Email:</label> */}
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Senha" 
                    value={form.password}
                    onChange={inputHandler}
                    required
                />
                <button type="submit">Acessar</button>
            </form>
            <button onClick={() => {goToBack(navigate)}}>Voltar</button>
        </>
    );
}