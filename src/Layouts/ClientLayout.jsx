import { Outlet } from 'react-router-dom'
import { ContCliente } from '../Cliente/ContCliente'

export const ClientLayout = () => {
  return (
    <>
      <ContCliente />
      <Outlet />
    </>
  )
}