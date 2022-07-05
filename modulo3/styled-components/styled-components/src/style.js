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
    align-items: baseline;
    gap: 5px;
    background-color: white;
    width: 100vw;
    height: 7vh;
`

export const MainHeaderLogo = styled.div`
    background-image: url(${(props)=>props.backgroundImage});
    background-size: 40px;
    background-repeat:no-repeat;
    width: 40px;
    height: 48px;
`

export const MainCenter = styled.div`
    background-color: white;
    width: 70vw;
    height: 90vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 10px;
    padding-bottom: 2vh;
`
export const InputStyle = styled.input`
    width: ${props => props.message ? '30vw' : '10vw'};
`