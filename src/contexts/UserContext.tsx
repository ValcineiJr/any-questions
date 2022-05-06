/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, ReactNode, useState } from 'react';

export interface ContextData {
  mainColor?: string;
  setMainScolor: React.Dispatch<React.SetStateAction<string>>;
}

interface ProviderProps {
  children?: ReactNode;
}

export const UserContext = createContext({} as ContextData);

export function UserContextProvider({ children }: ProviderProps) {
  const [mainColor, setMainScolor] = useState('#0F6FFF');

  return (
    <UserContext.Provider
      value={{
        mainColor,
        setMainScolor,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
