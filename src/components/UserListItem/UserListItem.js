import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { ReactComponent as DeleteIcon } from 'assets/icons/cancel2.svg';
const StyledListItem = styled.li`
  width: 426px;
  display: flex;
  margin: 33px 0 26px 0;
  padding: 0;
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
  margin: 0 0 26px 0;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.s};
`;
const StyledButton = styled.button`
  width: 23px;
  height: 23px;
  border: none;
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
  <StyledListItem>
    <StyledAverage>{average}</StyledAverage>
    <StyledUser>
      <StyledUserName>{name}</StyledUserName>
      <StyledAttendance>attendance: {attendance}</StyledAttendance>
    </StyledUser>
    <StyledButton>
      <DeleteIcon />
    </StyledButton>
  </StyledListItem>
);

UserListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UserListItem;
