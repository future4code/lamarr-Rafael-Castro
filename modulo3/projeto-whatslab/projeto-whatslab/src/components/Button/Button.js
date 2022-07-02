import React from 'react'

export function Button(props){
    return(
        <>
            <button onClick={props.onSend}>{props.value}</button>
        </>
    )
}