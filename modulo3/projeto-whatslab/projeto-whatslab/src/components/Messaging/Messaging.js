import React,{useState} from 'react'
import * as All from '../../style.js'

export function Messaging (){
    let [nameInput, setNameInput] = useState('')
    let [messageInput, setMessageInput] = useState('')
    let [msgHistory, setMsgHistory] = useState([])

    const handleNameInput = (event) =>{
        setNameInput(event.target.value)
    }
    const handleMessageInput = (event) =>{
        setMessageInput(event.target.value)
    }
    
    const onSendMessage = (e) =>{
        e.preventDefault()
        let newMsg
        if (nameInput == 'eu') {
            newMsg = <All.MessageP isItMe name={nameInput} onClick={DeleteMsg}>{messageInput}</All.MessageP>
        } else {
            newMsg = <All.MessageP name={nameInput} onClick={DeleteMsg}><All.SenderName>{nameInput}</All.SenderName>{messageInput}</All.MessageP>
        }
        setMsgHistory([newMsg, ...msgHistory])
        setNameInput('')
        setMessageInput('')
    }

    const DeleteMsg = (e) =>{
        
        // setMsgHistory(msgHistory.filter(item => item.name !== name));
        
        // switch (e.detail){
        //     case 2:
        //         console.log('double click');
        //         break
        //     default:
        //         return
        // }   
    }

    return (
        <>
            <All.MainMessageField>
                {msgHistory}
            </All.MainMessageField>
            <All.Messaging onSubmit={onSendMessage}>
                <label htmlFor='name'>Name:</label>
                <All.InputStyle name='name' onChange={handleNameInput} value={nameInput}></All.InputStyle>
                <label htmlFor='message'>Msg:</label>
                <All.InputStyle name='message' onChange={handleMessageInput} value={messageInput} message></All.InputStyle>
                <All.SendButton type='submit'>Enviar</All.SendButton>
            </All.Messaging>
        </>
    )
}