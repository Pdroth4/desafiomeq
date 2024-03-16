import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle `
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap');

    *{
        margin:0 ;
        padding: 0;
        box-sizing: border-box;
    }

`


export const Header = styled.header `


    width:100%;
    height: 8vh;
    display:flex;
    justify-content: space-between;
    padding-inline: 75px;


    section{
        width: 18vw;
        display: flex;
        justify-content: space-between;
        align-items:center;
    }

    .logoMC {
        width: 60px;
    }

    .downloadApp {
        width: 165px;
        height: 45px;
        border-radius: 8px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: 12px;
        font-weight: 400;
        font-family: "Roboto";
    }
    .downloadApp:hover{
        cursor: pointer;
        transform: scale(1.03);
    }

    .order {
        width: 165px;
        height: 45px;
        border-radius: 8px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color:  #FFC72C;;
        font-size: 12px;
        font-weight: lighter;
        font-family: "Roboto";
    }

    .order:hover {
        cursor: pointer;
        transform: scale(1.03);
    }
`