import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 500px;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  padding: 40px 30px;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 10px;
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;