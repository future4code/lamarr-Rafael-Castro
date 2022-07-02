import React,{useState} from 'react'
import { Button } from '../Button/Button'
import * as All from '../../style.js'

export function Messaging (){
    const [nameInput, setNameInput] = useState('')
    const [messageInput, setMessageInput] = useState('')
    const [nameDisplay, setNameDisplay] = useState('Sender')
    const [messageDisplay, setMessageDisplay] = useState('Message')

    const handleNameInput = (event) =>{
        setNameInput(event.target.value)
    }
    const handleMessageInput = (event) =>{
        setMessageInput(event.target.value)
    }

    const onSendMessage = () =>{
        let senderName = nameInput
        let senderMsg = messageInput
        setMessageDisplay(senderMsg)
        setNameDisplay(senderName)
        setNameInput('')
        setMessageInput('')

        if (nameDisplay != 'Sender') {
            
        }
    }

    return (
        <>
            <All.MainMessageField>
                <All.MsgSlot><span>{nameDisplay}: </span>{messageDisplay}</All.MsgSlot>
                <All.MsgSlot><span>Sender: </span>Message 2</All.MsgSlot>
                <All.MsgSlot><span>Sender: </span>Message 3</All.MsgSlot>
                <All.MsgSlot><span>Sender: </span>Message 4</All.MsgSlot>
                <All.MsgSlot><span>Sender: </span>Message 5</All.MsgSlot>
                <All.MsgSlot><span>Sender: </span>Message 6</All.MsgSlot>
                <All.MsgSlot><span>Sender: </span>Message 7</All.MsgSlot>
                <All.MsgSlot><span>Sender: </span>Message 8</All.MsgSlot>
                <All.MsgSlot><span>Sender: </span>Message 9</All.MsgSlot>
                <All.MsgSlot><span>Sender: </span>Message 10</All.MsgSlot>
                <All.MsgSlot><span>Sender: </span>Message 11</All.MsgSlot>
                <All.MsgSlot><span>Sender: </span>Message 12</All.MsgSlot>
                <All.MsgSlot><span>Sender: </span>Message 13</All.MsgSlot>
                <All.MsgSlot><span>Sender: </span>Message 14</All.MsgSlot>
                <All.MsgSlot><span>Sender: </span>Message 15</All.MsgSlot>
            </All.MainMessageField>
            <div>
                <label for='name'>Name:</label>
                <All.InputStyle name='name' onChange={handleNameInput} value={nameInput}></All.InputStyle>
                <label for='message'>Msg:</label>
                <All.InputStyle name='message' onChange={handleMessageInput} value={messageInput} message></All.InputStyle>
                <Button value='Enviar Mensagem' onSend={onSendMessage}/>
            </div>
        </>
    )
}