import React from 'react';
import { users } from 'data/users';
import PropTypes from 'prop-types';
import UserListItem from '../UserListItem/UserListItem';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

const Wrapper = styled.div`
  max-width: 500px;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  padding: 40px 30px;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 10px;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const UserList = () => (
  <Wrapper>
    <StyledList>
      {users.map((userData) => (
        <UserListItem key={userData.name} userData={userData} />
      ))}
    </StyledList>
  </Wrapper>
);

UserList.propTypes = {};

export default UserList;
