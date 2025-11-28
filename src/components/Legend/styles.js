import styled from "styled-components";

export const LegendContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 0.8rem;
  list-style-type: none;
  border: 1px solid #ef7360;
  padding: 5px;
  border-radius: 8px;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const BulletPoint = styled.li`
  background-color: ${(props) =>
    props.type === "first" ? "#0CCE6B" : "#DCED31"};
  color: ${(props) => (props.type === "first" ? "white" : "black")};
  border-radius: 8px;
  padding: 8px 12px;
  text-align: center;
  min-width: 60px;

  @media (max-width: 420px) {
    width: 100%;
    padding: 10px;
  }
`;