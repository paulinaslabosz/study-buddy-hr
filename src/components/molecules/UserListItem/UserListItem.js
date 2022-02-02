import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button.js';
import { Wrapper, StyledAverage, StyledUser } from 'components/molecules/UserListItem/UserListItem.styles';

const UserListItem = ({ userData: { name, attendance = '0%', average } }) => (
  <Wrapper>
    <StyledAverage value={average}>{average}</StyledAverage>
    <StyledUser>
      <p>
        {name}
        <Button />
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
