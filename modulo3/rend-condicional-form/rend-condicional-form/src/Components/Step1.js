import React, {useState} from 'react'

export function Step1(props){
    const [higherEduc, setHigherEduc] = useState('')

    const handleChange = (event) => {
        setHigherEduc(event.target.value)
        console.log(event.target.value);
    }

    props.func('step1')

    return (
        <>
            <form>
                <label htmlFor='name'>Informe seu nome: </label>
                <input type='text' id='name'></input>
                <label htmlFor='idade'>Informe sua idade: </label>
                <input id='idade' type='number'></input>
                <label htmlFor='email'>Informe seu email: </label>
                <input id='email' type='email'></input>
                <label htmlFor='schooling'>Informe sua escolaridade: </label>
                <select id='schooling' onChange={handleChange}>
                    <option hidden></option>
                    <option value='MedInc'>Ensino Médio Incompleto</option>
                    <option value='MedComp'>Ensino Médio Completo</option>
                    <option value='SupInc'>Ensino Superior Incompleto</option>
                    <option value='SupComp'>Ensino Superior Completo</option>
                </select>
            </form>
        </>
    )
}