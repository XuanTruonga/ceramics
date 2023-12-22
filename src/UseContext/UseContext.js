import { createContext } from "react"

export const ThemeContext = createContext()

export const ContextFormPay = ({children,value})=>{
  return(
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
