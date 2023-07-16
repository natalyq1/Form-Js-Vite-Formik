

import styled from "styled-components";

export const FormSpace = styled.div`
  width: 100%;
  height: fit-content;
  padding-bottom: 3em;
`;


export const LogoSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
`;

export const Img = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 0.8em;
`;

export const ButtonsContainer = styled.article`
display: flex;
padding: 0.8em 2.5em 0.8em 2.5em;
`;

export const ButtonGoNext = styled.button`
padding: 0.8em 2.5em 0.8em 2.5em;
margin: 1.5em auto;
display: flex;
color: #fff;
border: none;
border-radius: 8px;
background: #0575A5;
text-transform: capitalize;
font-weight:400;
&:hover{
  box-shadow:  2px 2px 3px #74a4b9,
              -1px -2px 3px #74a4b9;
}
`;

export const ButtonGoPrev = styled.button`
padding: 0.8em 2.5em 0.8em 2.5em;
margin: 1.5em auto;
display: flex;
color: #fff;
border: none;
border-radius: 8px;
background: #F28124;
text-transform: capitalize;
font-weight:400;
&:hover{
 box-shadow:  2px 2px 3px #ba7136,
             -1px -2px 3px #d2aa89;
}
`;
