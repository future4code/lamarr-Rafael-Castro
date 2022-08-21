import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { aluno, rootUrl } from "../Constants"
import { goToBack } from '../Coordinator'
import useAuthenticated from "../Hooks/useAuthenticated"

export function TripDetailsPage() {
    useAuthenticated()
    const navigate = useNavigate()
    const pathParams = useParams()

    let [tripDetails, setTripDetails] = useState([])

    // Grab Trip Details
    useEffect(() => {
        axios.get(`${rootUrl}${aluno}/trip/${pathParams.id}`,
        {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then(response => {
            setTripDetails([response.data.trip])
            })
    }, [])

    const myHeader = {
        headers: {
            'Content-Type': 'application/json',
            'auth': localStorage.getItem("token")
        }
    }

    let tripDetailsRender = tripDetails.map((item, index) => {

        const decideCandidate = (id, choice) => {
            let body = {"approve": choice}
            
            axios.put(`${rootUrl}${aluno}/trips/${pathParams.id}/candidates/${id}/decide`,
            body, myHeader)
            .then(response =>{
                {body.approve ? alert('Candidato aprovado!') : alert('Candidato reprovado!')}
            }).catch(error => {
                console.log(error.response.data.message)
            })
        }

        return (
            <div key={index}>
                <li>Nome da Viagem: {item.name}</li>
                <li>Data da viagem: {item.date}</li>
                <li>Descrição da viagem: {item.description}</li>
                <li>Destino: {item.planet}</li>
                <li>Duração: {item.durationInDays} dias</li>
                <p>Candidatos inscritos:</p>
                {item.candidates.map((item, index) =>
                    <li key={index}>{item.name} 
                        <button onClick={()=>decideCandidate(item.id, true)}>Aprovar</button>
                        <button onClick={()=>decideCandidate(item.id, false)}>Reprovar</button>
                    </li>
                )}
                <p>Candidatos aprovados:</p>
                {item.approved.map((item, index) => 
                    <li key={index}>{item.name}</li>)}
            </div>
        )
    })

    return (
        <>
            <h1>Trip Details Page</h1>
            <ul>
                {tripDetailsRender}
            </ul>
            <button onClick={() => {goToBack(navigate)}}>Voltar</button>
        </>
    );
}