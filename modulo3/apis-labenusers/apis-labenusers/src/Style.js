import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    width: 70vw;
    margin: auto;
    padding: 15px 30px 30px 30px;
    margin-top: 50px;
    border-radius: 5px;

    label{
        margin-top: 15px;
    }

    input{
        width: 60%;
    }

    button{
        margin-top: 10px;
    }

    ul{
        list-style: none;
    }
`

export const Span = styled.span`
    display: flex;
    align-items: center;
    gap: 10px;
`