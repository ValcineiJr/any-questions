import React, { ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';
import { UserContextProvider } from './UserContext';

import theme from '@styles/theme';

interface Props {
  children?: ReactNode;
}

export function AppProviders({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>{children}</UserContextProvider>
    </ThemeProvider>
  );
}
