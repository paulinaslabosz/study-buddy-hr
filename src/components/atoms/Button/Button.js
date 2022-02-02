import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/cancel2.svg';
import { StyledButton } from './Button.styles';

const Button = () => (
  <StyledButton>
    <DeleteIcon />
  </StyledButton>
);

export default Button;
