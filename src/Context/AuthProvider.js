import React from 'react'
import { createContext } from 'react'
import Usefirebase from '../hooks/Usefirebase'

export const Auth = createContext()
const AuthProvider = ({ children }) => {
  const allContext = Usefirebase()

  return <Auth.Provider value={allContext}>{children}</Auth.Provider>
}

export default AuthProvider
