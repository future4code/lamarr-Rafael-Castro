import styled from 'styled-components'

export const Main = styled.main`
    background-color: orange;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

// Barra superior
export const MainHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: white;
    width: 100vw;
    height: 60px;
`

export const MainHeaderLogo = styled.div`
    background-image: url(${(props)=>props.backgroundImage});
    background-size: 40px;
    background-repeat:no-repeat;
    width: 40px;
    height: 48px;
`

// Parte central
export const MainBody = styled.div`
    background-color: #ded5ce;
    border: 2px solid #9b9590;
    border-radius: 4px;
    width: 70vw;
    height: 90.5vh;
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 10px;
    padding-bottom: 4vh;
    overflow: hidden;
`

// Histórico de mensagens
export const MainMessageField = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    overflow: auto;
`

// Parágrafos das mensagens
export const MessageP = styled.p`
    align-self: ${props => props.isItMe ? 'flex-end' : 'flex-start'};
    display: flex;
    flex-direction: column;
    text-align: start;
    margin-left: 30px;
    text-transform: capitalize;
`

export const SenderName = styled.span`
    font-weight: bold;
`

// Container dos inputs de nome e mensagem, labels e botão de envio
export const Messaging = styled.form`
    display: flex;
    justify-content: space-between;
    margin: 0 10px;

    label{
        position: absolute;
        opacity: 0;
    }
`

// Campos inputs de nome e mensagem
export const InputStyle = styled.input`
    width: ${props => props.message ? '43vw' : '15vw'};
    height: 2em;
    border: 1px solid wheat;
    border-radius: 4px;
    &:focus{
        outline-color: gold;
        outline-style: outset;
    }
`

export const SendButton = styled.button`
    background: lightgray;
    border: 1px solid gray;
    border-radius: 4px;
    font-weight: bold;
    padding: 0 15px;

    &:hover{
        background: darkgray;
    }
`

export const Footer = styled.footer`
    background-color: lightgray;
    width: 100%;
    font-size: 12px;
    position: relative;
    bottom: 7px;
`