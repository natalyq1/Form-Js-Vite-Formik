import styled from "styled-components";

export const MainSpace = styled.div`
  width: 98vw;
  height: 97vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

export const ImageSpace = styled.div`
  width: 40%;
  height: 100vh;
  background-image: url("/img/portada.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const FormSpace = styled.div`
  width: 55%;
  margin:  1em auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;
