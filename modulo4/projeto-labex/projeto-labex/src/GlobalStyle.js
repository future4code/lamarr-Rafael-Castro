import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import bg_img from './images/space_bg.jpg'
import main_hud from './images/hp_hud.jpg'

export const GlobalStyle = createGlobalStyle`
    :root{
        background: #000;
        color: #fff;
        background-image: url(${bg_img});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
`

export const HomePageMain = styled.div`
    height: 400px;
    width: 45%;
    box-shadow: 0px 0px 15px 1px rgba(59,200,255,0.6);
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;
    background-image: url(${main_hud});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    margin-top: 200px;

    h1{
        font-family: 'Rammetto One', cursive;
        font-size: 60px;
        margin: 0;
        text-shadow: 0 5px 2px rgb(149, 222, 251);

        span{
            font-size: 70px;
        }
    }

    a{
        font-family: 'Josefin Sans', sans-serif;
        color: rgb(149, 222, 251);
        text-decoration: none;
        font-size: 28px;
        text-shadow: 1px 1px 2px white;
    }
`

export const test1 = styled.html`
    background: black;
`