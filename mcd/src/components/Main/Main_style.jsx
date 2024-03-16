import styled from "styled-components";



export const Main = styled.main`

   
    width: 100%;
    height: 80vh;
    background-color: #FFC72C;
    padding-inline: 75px;

    section{
        padding-top: 8vh;
        display: flex;
        align-items: center;
        
        justify-content: space-around;
        height: 70vh;
        flex-direction: column;

    }

    .itemMain {
        display:flex;
        width:100%;
        justify-content: center;
        gap: 420px;
        align-items:center;
        
    }

    .itemMain img{
        
        width:400px;
        
    }

    .textMain {
        
        font-size: 50px;
        width: 750px ;
        color: white;
        font-family: "Roboto";
    }

    span{
        color: red
    }


    .itens{

        height: 20vh;
        width: 30vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .itens img {
        width: 140px;
    }

    .itens .bgmc{
        padding-top:20px;
    }
    .itens .ice {
        width: 105px;
        padding-bottom: 20px
    }

`