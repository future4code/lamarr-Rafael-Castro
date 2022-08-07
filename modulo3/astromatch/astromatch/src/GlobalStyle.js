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
    flex-direction: column;
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
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 5px;
    position: relative;
    border-bottom: 1px solid lightgray;
    
    img:last-child{
        height: 15px;
        position: absolute;
        right: 7px;
    }
    
    img:first-child{
        height: 30px;
        position: absolute;
    }

    h1{
        color: #0a776c;
        margin: auto;
    }

    span{
        color: #680868;
    }
`

export const ProfilePicContainer = styled.div`
    height: 100%;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        width: 17%;
        position: absolute;
        margin-bottom: 30px;
        color: #000;
        padding: 0 10px;
        align-self: flex-end;
    }

    span{
        font-weight: bold;
        font-size: 22px;
    }
`

export const ProfilePic = styled.img`
    max-height: 80%;
    max-width: 100%;
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

export const Matches = styled.div`
    height: 93%;
    width: 100%;
    overflow: auto;
    padding: 10px;

    ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 10px;
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