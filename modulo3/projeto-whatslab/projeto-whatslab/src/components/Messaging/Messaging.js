import React,{useState} from 'react'
import { Button } from '../Button/Button'
import { InputStyle } from '../../style.js'

export function Messaging (){
    const [nameInput, setNameInput] = useState('')
    const [messageInput, setMessageInput] = useState('')

    const handleNameInput = (event) =>{
        setNameInput(event.target.value)
    }
    const handleMessageInput = (event) =>{
        setMessageInput(event.target.value)
    }

    const onSendMessage = () =>{
        let senderName = nameInput
        let senderMsg = messageInput
        setNameInput('')
        setMessageInput('')
    }

    return (
        <>
            <div>
                
            </div>
            <div>
                <label for='name'>Name:</label>
                <InputStyle name='name' onChange={handleNameInput} value={nameInput}></InputStyle>
                <label for='message'>Msg:</label>
                <InputStyle name='message' onChange={handleMessageInput} value={messageInput} message></InputStyle>
                <Button value='Enviar Mensagem' onSend={onSendMessage}/>
            </div>
        </>
    )
}