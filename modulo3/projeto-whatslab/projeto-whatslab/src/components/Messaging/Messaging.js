import React,{useState} from 'react'
import { Button } from '../Button/Button'
import * as All from '../../style.js'

export function Messaging (){
    let [nameInput, setNameInput] = useState('')
    let [messageInput, setMessageInput] = useState('')
    let [msgHistory, setMsgHistory] = useState('')

    const handleNameInput = (event) =>{
        setNameInput(event.target.value)
    }
    const handleMessageInput = (event) =>{
        setMessageInput(event.target.value)
    }
    
    const onSendMessage = () =>{
        let newMsg
        if (nameInput == 'eu') {
            newMsg = <All.MessageP isItMe>{nameInput}: {messageInput}</All.MessageP>
        } else {
            newMsg = <All.MessageP>{nameInput}: {messageInput}</All.MessageP>
        }
        setMsgHistory([newMsg, ...msgHistory])
        setNameInput('')
        setMessageInput('')
    }

    return (
        <>
            <All.MainMessageField>
                {msgHistory}
            </All.MainMessageField>
            <div>
                <label htmlFor='name'>Name:</label>
                <All.InputStyle name='name' onChange={handleNameInput} value={nameInput}></All.InputStyle>
                <label htmlFor='message'>Msg:</label>
                <All.InputStyle name='message' onChange={handleMessageInput} value={messageInput} message></All.InputStyle>
                <Button value='Enviar Mensagem' onSend={onSendMessage}/>
            </div>
        </>
    )
}