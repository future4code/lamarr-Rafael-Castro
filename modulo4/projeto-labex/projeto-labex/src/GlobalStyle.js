import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import bg_img from './images/space_bg.jpg'
import main_hud from './images/hp_hud.jpg'

export const GlobalStyle = createGlobalStyle`
    :root{
        --title-font: 'Rammetto One', cursive;
        --text-font: 'Josefin Sans', sans-serif;
        height: 100vh;
        background: #000;
        color: #fff;
        background-image: url(${bg_img});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
`

// HOME PAGE
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
        font-family: var(--title-font);
        font-size: 60px;
        margin: 0;
        text-shadow: 0 5px 2px rgb(149, 222, 251);

        span{
            font-size: 70px;
        }
    }

    a{
        font-family: var(--text-font);
        color: rgb(149, 222, 251);
        text-decoration: none;
        font-size: 28px;
        text-shadow: 1px 1px 2px white;
    }
`

// TRIPS LIST PAGE
export const TripsListContainer = styled.div`
    width: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 100px;
    /* border: 1px dotted white; */

    h1{
        font-family: var(--title-font);
    }

    ul{
        list-style: none;
        padding: 0;
        font-family: var(--text-font);
        font-size: 22px;

        li{
            padding: 5px 0;
        }
    }
`