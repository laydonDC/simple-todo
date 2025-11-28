import styled from "styled-components";

export const Container = styled.div `
  background-color: #083D77;
  border-radius: 15px;
  color: white;
  padding: 20px 30px;
  max-width: 500px;
  width: 90%;
  margin: 40px auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  @media (max-width: 420px) {
    padding: 15px 20px;
    width: 95%;
    margin: 30px auto;
  }
`;