import { createGlobalStyle } from 'styled-components'
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`
export const Main = styled.main`
    background: lightgray;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CardHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    
    img{
        position: relative;
        height: 15px;
        right: -30%;
    }

    h1{
        color: #0a776c;
    }

    span{
        color: #680868;
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 510px;
    width: 350px;
    border: 1px solid black;
    border-radius: 4px;
    background: #fff;

    div{
        border-bottom: 1px solid lightgray;
        width: 100%;
    }
`

export const ProfilePic = styled.img`
    width: 85%;
    margin-top: 7%;
    border-radius: 4px;
`

export const CardFooter = styled.footer`
    display: flex;
    height: 18%;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;

    
    img{
        height: 60%;
        cursor: pointer;
    }
`