import React from 'react';
import PropTypes from 'prop-types';

const UserListItem = ({ userData: { name, attendance = '0%', average } }) => (
  <li>
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>{attendance}</p>
    </div>
    <button>X</button>
  </li>
);

UserListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UserListItem;
