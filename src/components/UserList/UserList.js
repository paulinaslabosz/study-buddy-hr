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
  
  
`;

const StyledList = styled.ul`
padding: 27px 24px 6px 44px;
margin: 0;
`

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
