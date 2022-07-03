import React,{useState} from 'react'
import { Button } from '../Button/Button'
import * as All from '../../style.js'

export function Messaging (){
    const [nameInput, setNameInput] = useState('')
    const [messageInput, setMessageInput] = useState('')
    const [nameDisplay1, setNameDisplay1] = useState('Sender')
    const [messageDisplay1, setMessageDisplay1] = useState('Message')
    const [nameDisplay2, setNameDisplay2] = useState('Sender')
    const [messageDisplay2, setMessageDisplay2] = useState('Message')
    const [nameDisplay3, setNameDisplay3] = useState('Sender')
    const [messageDisplay3, setMessageDisplay3] = useState('Message')
    const [nameDisplay4, setNameDisplay4] = useState('Sender')
    const [messageDisplay4, setMessageDisplay4] = useState('Message')
    const [nameDisplay5, setNameDisplay5] = useState('Sender')
    const [messageDisplay5, setMessageDisplay5] = useState('Message')
    const [nameDisplay6, setNameDisplay6] = useState('Sender')
    const [messageDisplay6, setMessageDisplay6] = useState('Message')
    const [nameDisplay7, setNameDisplay7] = useState('Sender')
    const [messageDisplay7, setMessageDisplay7] = useState('Message')
    const [nameDisplay8, setNameDisplay8] = useState('Sender')
    const [messageDisplay8, setMessageDisplay8] = useState('Message')
    const [nameDisplay9, setNameDisplay9] = useState('Sender')
    const [messageDisplay9, setMessageDisplay9] = useState('Message')
    const [nameDisplay10, setNameDisplay10] = useState('Sender')
    const [messageDisplay10, setMessageDisplay10] = useState('Message')
    const [nameDisplay11, setNameDisplay11] = useState('Sender')
    const [messageDisplay11, setMessageDisplay11] = useState('Message')
    const [nameDisplay12, setNameDisplay12] = useState('Sender')
    const [messageDisplay12, setMessageDisplay12] = useState('Message')
    const [nameDisplay13, setNameDisplay13] = useState('Sender')
    const [messageDisplay13, setMessageDisplay13] = useState('Message')
    const [nameDisplay14, setNameDisplay14] = useState('Sender')
    const [messageDisplay14, setMessageDisplay14] = useState('Message')
    const [nameDisplay15, setNameDisplay15] = useState('Sender')
    const [messageDisplay15, setMessageDisplay15] = useState('Message')

    const [slotVisibility, setSlotVisibility] = useState('false')

    const handleNameInput = (event) =>{
        setNameInput(event.target.value)
    }
    const handleMessageInput = (event) =>{
        setMessageInput(event.target.value)
    }
    
    const onSendMessage = () =>{
        let senderName = nameInput
        let senderMsg = messageInput

        setMessageDisplay15(messageDisplay14)
        setNameDisplay15(nameDisplay14)
        setMessageDisplay14(messageDisplay13)
        setNameDisplay14(nameDisplay13)
        setMessageDisplay13(messageDisplay12)
        setNameDisplay13(nameDisplay12)
        setMessageDisplay12(messageDisplay11)
        setNameDisplay12(nameDisplay11)
        setMessageDisplay11(messageDisplay10)
        setNameDisplay11(nameDisplay10)
        setMessageDisplay10(messageDisplay9)
        setNameDisplay10(nameDisplay9)
        setMessageDisplay9(messageDisplay8)
        setNameDisplay9(nameDisplay8)
        setMessageDisplay8(messageDisplay7)
        setNameDisplay8(nameDisplay7)
        setMessageDisplay7(messageDisplay6)
        setNameDisplay7(nameDisplay6)
        setMessageDisplay6(messageDisplay5)
        setNameDisplay6(nameDisplay5)
        setMessageDisplay5(messageDisplay4)
        setNameDisplay5(nameDisplay4)
        setMessageDisplay4(messageDisplay3)
        setNameDisplay4(nameDisplay3)
        setMessageDisplay3(messageDisplay2)
        setNameDisplay3(nameDisplay2)
        setMessageDisplay2(messageDisplay1)
        setNameDisplay2(nameDisplay1)
        setMessageDisplay1(senderMsg)
        setNameDisplay1(senderName)
        setNameInput('')
        setMessageInput('')

        console.log('test');
        console.log(nameDisplay1);

        // if (nameDisplay1 != 'Sender') {
        //     setSlotVisibility(false);
        //     console.log('test1');
        // }
    }

    return (
        <>
            <All.MainMessageField>
                <All.MsgSlot hiddenSlot={slotVisibility}><span>{nameDisplay1}: </span>{messageDisplay1}</All.MsgSlot>
                <All.MsgSlot><span>{nameDisplay2}: </span>{messageDisplay2}</All.MsgSlot>
                <All.MsgSlot><span>{nameDisplay3}: </span>{messageDisplay3}</All.MsgSlot>
                <All.MsgSlot><span>{nameDisplay4}: </span>{messageDisplay4}</All.MsgSlot>
                <All.MsgSlot><span>{nameDisplay5}: </span>{messageDisplay5}</All.MsgSlot>
                <All.MsgSlot><span>{nameDisplay6}: </span>{messageDisplay6}</All.MsgSlot>
                <All.MsgSlot><span>{nameDisplay7}: </span>{messageDisplay7}</All.MsgSlot>
                <All.MsgSlot><span>{nameDisplay8}: </span>{messageDisplay8}</All.MsgSlot>
                <All.MsgSlot><span>{nameDisplay9}: </span>{messageDisplay9}</All.MsgSlot>
                <All.MsgSlot><span>{nameDisplay10}: </span>{messageDisplay10}</All.MsgSlot>
                <All.MsgSlot><span>{nameDisplay11}: </span>{messageDisplay11}</All.MsgSlot>
                <All.MsgSlot><span>{nameDisplay12}: </span>{messageDisplay12}</All.MsgSlot>
                <All.MsgSlot><span>{nameDisplay13}: </span>{messageDisplay13}</All.MsgSlot>
                <All.MsgSlot><span>{nameDisplay14}: </span>{messageDisplay14}</All.MsgSlot>
                <All.MsgSlot><span>{nameDisplay15}: </span>{messageDisplay15}</All.MsgSlot>
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