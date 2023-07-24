/* eslint-disable */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, createContext, ReactNode, Dispatch, SetStateAction } from "react"

type LoadingContextType = {
  isContextLoading: boolean
  setIsContextLoading: Dispatch<SetStateAction<boolean>>
}

// Loading Circle Cross-app manager context
export const LoadingContext = createContext<LoadingContextType>({
  isContextLoading: false,
  setIsContextLoading: () => {}
})

export const LoadingContextProvider = ({ children }: any) => {
  const [isContextLoading, setIsContextLoading] = useState(false)
  const value: LoadingContextType = { isContextLoading, setIsContextLoading }
  return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
}
