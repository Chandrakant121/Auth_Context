import styled from 'styled-components'

export const Nav = styled.nav`
display:flex;
border:1px solid black;
padding:10px 10px;
margin:10px;
background-color:gray;
justify-content:end;
align-items:center
`

export const Button = styled.button`
display:flex;
padding:5px 10px;
margin:4px 10px;
border:2px solid yellow;
border-radius:2px;
background-color:white;
&:hover{
    cursor: pointer;
    background-color:black;
    color:white;
    border:2px solid white;

}
`