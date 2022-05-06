import { useContext } from 'react';

import { UserContext, ContextData } from '@contexts/UserContext';

export function useUser(): ContextData {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthContext.');
  }

  return context;
}
