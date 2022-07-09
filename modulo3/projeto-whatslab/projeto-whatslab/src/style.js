import styled from 'styled-components'

export const Main = styled.main`
    background-color: orange;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

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

export const MainBody = styled.div`
    background-color: white;
    width: 70vw;
    height: 90.5vh;
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 10px;
    padding-bottom: 2vh;
    overflow: hidden;
`

export const MainMessageField = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    overflow: auto;
`

export const MessageP = styled.p`
    align-self: ${props => props.isItMe ? 'flex-end' : 'flex-start'};
`

export const InputStyle = styled.input`
    width: ${props => props.message ? '30vw' : '10vw'};
`

export const Footer = styled.footer`
    background-color: lightgray;
    width: 100%;
    font-size: 12px;
    position: relative;
    bottom: 7px;
`