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

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 510px;
    width: 350px;
    border: 1px solid black;
    border-radius: 4px;
    background: #fff;
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

export const ProfilePicContainer = styled.div`
    max-height: 80%;
    max-width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: end;

    p{
        width: 17%;
        position: absolute;
        margin-bottom: 30px;
        color: #fff;
        padding: 0 10px;
    }

    span{
        font-weight: bold;
        font-size: 22px;
    }


`

export const ProfilePic = styled.img`
    height: 100%;
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

export const CardCore = styled.div`
    border-top: 1px solid lightgray;
    height: 93%;
    width: 100%;
    overflow: auto;

    ul{
        list-style: none;
    }

    ul li{
        height: 70px;
        width: 70px;
        display: flex;
        gap: 15px;
        align-items: center;
    }

    li img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }

    p{
        width: 100px;
    }
`