import styled from "styled-components";

export const StyledButton = styled.button`
  width: 23px;
  height: 23px;
  border: none;
  margin: 0 15px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.buttonGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 100%;
    height: 100%;
  }
`;