import React, { createContext, useState } from "react";


// Loading Circle Cross-app manager context
export const LoadingContext = createContext({
  isContextLoading: false,
  setIsLoading: () => {},
});

export const LoadingContextProvider = ({ children }) => {
  const [isContextLoading, setIsContextLoading] = useState(false);
  const value = { isContextLoading, setIsContextLoading };
  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};