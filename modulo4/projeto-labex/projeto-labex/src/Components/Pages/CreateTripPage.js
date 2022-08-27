import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToBack } from '../Coordinator'
import { aluno, planets, rootUrl } from "../Constants";
import useAuthenticated from "../Hooks/useAuthenticated"
import { useForm } from "../Hooks/useForm";
import { CreateTripFormContainer, 
        ColumnsContainer, 
        ColumnLeft, 
        ColumnRight } from "../../GlobalStyle";

export function CreateTripPage() {
    useAuthenticated()
    const navigate = useNavigate();

    const [form, inputHandler, clear] = useForm({name:"",
                                                planet:"",
                                                date:"",
                                                description:"",
                                                durationInDays:""})

    const createTrip = (e) => {
        e.preventDefault()

        const myHeader = {
            headers: {
                'Content-Type': 'application/json',
                'auth': localStorage.getItem("token")
            }
        }

        axios.post(`${rootUrl}${aluno}/trips`, form, myHeader)
        .then(response => {
            alert("Nova viagem criada.")
        }).catch(error => {
            console.log(error.response.data.message)
        })
        clear()
    }

    const dateToday = new Date().toISOString().slice(0,10)

    const planetsOptions = planets.map((item, index) => {
        return <option key={index}>{item}</option>
    })

    return (
        <CreateTripFormContainer>
            <h1>Criar nova viagem</h1>
            <form onSubmit={createTrip}>
                <ColumnsContainer>
                    <ColumnLeft>
                        <label htmlFor="name">Nome da viagem:</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nome da viagem" 
                            pattern="[a-zA-Z\s]{5,}"
                            title="Mínimo de 5 letras"
                            value={form.name}
                            onChange={inputHandler}
                            required
                        />
                        <label htmlFor="planet">Planeta:</label>
                        <select name="planet" value={form.planet} onChange={inputHandler} required>
                            <option disabled selected value="">Escolha um planeta</option>
                            {planetsOptions}
                        </select>
                        <label htmlFor="date">Data:</label>
                        <input 
                            type="date" 
                            name="date"
                            min={dateToday}
                            value={form.date}
                            onChange={inputHandler}
                            required
                        />
                    </ColumnLeft>
                    <ColumnRight>
                        <label htmlFor="description">Descrição:</label>
                        <input
                            type="text" 
                            name="description" 
                            pattern="[a-zA-Z\s]{30,}" 
                            title="Mínimo de 30 caractéres" 
                            placeholder="Descrição"
                            value={form.description}
                            onChange={inputHandler}
                            required
                        />
                        <label htmlFor="durationInDays">Duração:</label>
                        <input 
                            type="number" 
                            name="durationInDays" 
                            min={50} 
                            title="Mínimo de 50 dias" 
                            placeholder="Duração em dias"
                            value={form.durationInDays}
                            onChange={inputHandler}
                            required
                        />
                    </ColumnRight>
                </ColumnsContainer>
                <div>
                    <button onClick={() => {goToBack(navigate)}}>Voltar</button>
                    <button>Criar</button>
                </div>
            </form>
        </CreateTripFormContainer>
    );
}