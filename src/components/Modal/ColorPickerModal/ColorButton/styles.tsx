import { styled } from "styled-components";

export const StyledColorButton = styled.button`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  margin: 3px;
  border: none;
  box-shadow: 1px 1px 2px 1px;
`;
