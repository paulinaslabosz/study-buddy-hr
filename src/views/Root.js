import React from 'react';
import UserList from 'components/organisms/UserList/UserList.js';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { Wrapper } from './Root.styles';
import { theme } from 'assets/styles/theme';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <UserList />
    </Wrapper>
  </ThemeProvider>
);

export default Root;
