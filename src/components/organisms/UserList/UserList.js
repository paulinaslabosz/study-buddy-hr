import React from 'react';
import { users } from 'data/users';
import UserListItem from '../../molecules/UserListItem/UserListItem.js';
import { Wrapper, StyledList } from 'components/organisms/UserList/UserList.styles.js';

const UserList = () => (
  <Wrapper>
    <StyledList>
      {users.map((userData) => (
        <UserListItem key={userData.name} userData={userData} />
      ))}
    </StyledList>
  </Wrapper>
);

export default UserList;
