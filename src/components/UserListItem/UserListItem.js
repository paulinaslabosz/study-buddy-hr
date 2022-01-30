import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

const StyledList = styled.li`
  width: 426px;
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
`;

const StyledAverage = styled.div`
  width: 34px;
  height: 34px;
  background: ${({ theme }) => theme.colors.yellow};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
`;
const StyledUser = styled.div`
margin: 0 14px 0 24px;
`;
const StyledUserName = styled.p`
margin: 0;
color: ${({ theme }) => theme.colors.grey};
font-size: ${({ theme }) => theme.fontSize.l};
font-weight: 700;
`;
const StyledAttendance = styled.p`
margin: 0;
color: ${({ theme }) => theme.colors.grey};
font-size: ${({ theme }) => theme.fontSize.s};
`;
const StyledButton = styled.button``;

const UserListItem = ({ userData: { name, attendance = '0%', average } }) => (
  <StyledList>
    <StyledAverage>{average}</StyledAverage>
    <StyledUser>
      <StyledUserName>{name}</StyledUserName>
      <StyledAttendance>attendance: {attendance}</StyledAttendance>
    </StyledUser>
    <StyledButton>X</StyledButton>
  </StyledList>
);

UserListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UserListItem;
