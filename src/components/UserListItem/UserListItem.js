import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { ReactComponent as DeleteIcon } from 'assets/icons/cancel2.svg';

const Wrapper = styled.li`
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

const StyledAverage = styled.div`
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
  font-weight: 700;
`;
const StyledUser = styled.div`
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

const StyledButton = styled.button`
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

const UserListItem = ({ userData: { name, attendance = '0%', average } }) => (
  <Wrapper>
    <StyledAverage value={average}>{average}</StyledAverage>
    <StyledUser>
      <p>
        {name}
        <StyledButton>
          <DeleteIcon />
        </StyledButton>
      </p>

      <p>attendance: {attendance}</p>
    </StyledUser>
  </Wrapper>
);

UserListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UserListItem;
