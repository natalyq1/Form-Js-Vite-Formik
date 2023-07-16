import styled from "styled-components";

export const MainSpace = styled.div`
  width: 98vw;
  height: 100vh;
  display: flex;
  padding: 0;
  margin: 0;
`;

export const ImageSpace = styled.div`
  width: 40%;
  height: 100vh;
  margin: 0;
  position: fixed;
  background-image: url("/img/portada.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const FormSpace = styled.div`
  width:56%;
  margin-top: 5em;
  margin-right: 3em;
  margin-bottom: 1em;
  margin-left: 42em;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;


