import React from 'react';
import { users } from 'data/users';
import PropTypes from 'prop-types';
import UserListItem from '../UserListItem/UserListItem';

const UserList = () => (
  <div>
    <ul>
      {users.map((userData) => (
        <UserListItem userData={userData} />
      ))}
    </ul>
  </div>
);

UserList.propTypes = {};

export default UserList;
