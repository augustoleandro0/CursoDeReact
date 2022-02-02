import styled from "styled-components"


export const Card = styled.div `
    border: 1px solid;
    margin: 15px;
    border: 1px solid;
    border-radius: 10px;
    overflow: hidden;
    width: 45%;

    @media (max-width: 670px){
        width: 80%;
  }
`;


export const  Title = styled.div `
        padding: 5px 0;
        height: 85%;
        text-align: center;
    
    > p {
        color: #fff;
    }
`;


export const Content = styled.div `
    background-color: #fff;
    padding: 20px;
    color: #000;

`;