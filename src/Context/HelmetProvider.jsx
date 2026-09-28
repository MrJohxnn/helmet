import { useState } from 'react'
import { HelmetContext } from '../Context/HelmetContext'

export const HelmetProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: '',
    role: '',
    active: false
  })

  const login = (username, role) => {
    setUser({
      username,
      role,
      active: true
    })
  }

  const logout = () => {
    setUser({
      username: '',
      role: '',
      active: false
    })
  }

  return (
    <HelmetContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >
      {children}
    </HelmetContext.Provider>
  )
}