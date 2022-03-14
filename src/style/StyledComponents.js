import styledComponents from "styled-components";
import styled from "styled-components"


const H2Styled = styled.h2`
    color: blue;
    text-aling:center;

`


export const DivStyled = styled.div`
    border: 2px solid blue;
    margin: 1px;
    border-radius: 60px;
    font-family: comic-sans;
    
    
`


export const Shead = styled.div`
width: 100%;
background-color: black;
border-radius: 60px;
text-align: center;
color:  palevioletred;
`


export default H2Styled;

export const Sbody= styledComponents.section`
background-color: black;
max-width: 1440px;
max-height: 50%;
margin= 0;
`

export const Spaf= styledComponents.p`
color: red;
display: flex;
justify-content: center;
font-size: large;
`
