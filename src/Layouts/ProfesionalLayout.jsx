import { Outlet } from 'react-router-dom'
import { ContProfesional } from '../Profesional/ContProfesional'

export const ProfessionalLayout = () => {
  return (
    <>
      <ContProfesional />
      <Outlet />
    </>
  )
}