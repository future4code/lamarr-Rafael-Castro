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
    justify-content: space-between;
    height: 510px;
    width: 350px;
    border: 1px solid black;
    border-radius: 4px;
    background: #fff;

    .HorizontalBar {
        border-bottom: 1px solid black;
        width: 350px;
        position: absolute;
        top: 245px;
    }
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

    p, h3{
        position: absolute;
        margin-bottom: 30px;
        color: #fff;
        width: 75%;
        padding: 0 10px;
    }

    h3 {
        margin-bottom: 90px;
    }
`

export const ProfilePic = styled.img`
    height: 100%;
    /* margin-top: 7%; */
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