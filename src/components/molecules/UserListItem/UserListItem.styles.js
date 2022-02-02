import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lineGrey};
  }
`;

export const StyledAverage = styled.div`
  width: 34px;
  height: 34px;
  background: ${({ theme, value }) => {
    if (value > 4) return theme.colors.green;
    if (value > 3) return theme.colors.yellow;
    if (value > 2) return theme.colors.red;
  }};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
`;
export const StyledUser = styled.div`
  padding: 25px 20px;

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.grey};
  }

  p:first-child {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
