import { useState } from 'react'
import { HelmetContext } from '../Context/HelmetContext'

export const HelmetProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: '',
    name: '',
    role: '',
    active: false
  })

  const login = (username, name, role) => {
    setUser({
      username,
      name,
      role,
      active: true
    })
  }

  const logout = () => {
    setUser({
      username: '',
      name: '',
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