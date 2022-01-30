import React from 'react';
import { users } from 'data/users';
import PropTypes from 'prop-types';
import UserListItem from '../UserListItem/UserListItem';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

const Wrapper = styled.div`
  width: 494px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 10px;
  margin: 0;
  padding: 0;
`;

const UserList = () => (
  <Wrapper>
    <ul>
      {users.map((userData) => (
        <UserListItem key={userData.name} userData={userData} />
      ))}
    </ul>
  </Wrapper>
);

UserList.propTypes = {};

export default UserList;
