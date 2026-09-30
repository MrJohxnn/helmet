import { Outlet } from 'react-router-dom'
import { ContProfesional } from '../Profesional/ContProfesional'

export const ProfesionalLayout = () => {
  return (
    <>
      <ContProfesional />
      <Outlet />
    </>
  )
}