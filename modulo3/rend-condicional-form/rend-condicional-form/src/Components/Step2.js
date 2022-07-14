import React, {useState} from 'react'


export function Step2(){
    return(
        <>
            <form>
                <label htmlFor='course'>Qual curso?</label>
                <input type='text' id='course'></input>
                <label htmlFor='school'>Em que unidade de ensino?</label>
                <input id='school' type='text'></input>
            </form>
        </>
    )
}