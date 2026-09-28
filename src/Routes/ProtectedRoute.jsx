import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { HelmetContext } from '../Context/HelmetContext'

export const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user } = useContext(HelmetContext)

  if (!user.active) {
    return <Navigate to="/auth" replace />
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/auth" replace />
  }

  return children
}