import { createContext, useReducer } from 'react'
import Mock from '../mock/utilities.json'

// Initial State
const initialState = {
  utilities: Mock,
  error: null,
  loading: true,
}

// Create context
export const GlobalContext = createContext(initialState)

// Global provider
export const GlobalProvider = ({ children }) => {
  //const [state, dispatch] = useReducer(AppReducer, initialState)

  // Action
  function getUtilities() {
    return Mock
  }

  return (
    <GlobalContext.Provider value={{ getUtilities, state: initialState }}>
      {children}
    </GlobalContext.Provider>
  )
}
