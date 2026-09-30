import { Outlet } from 'react-router-dom'
import { ContHead } from '../Reutilizables/ContHead'
import { ContFooter } from '../Reutilizables/ContFooter'

// Usa aquí el menú de profesional que ya tengas
import { MenuProf } from '../Reutilizables/Menus/MenuProf'

export const ProfesionalLayout = () => {
  return (
    <>
      <ContHead />

      <MenuProf />

      <main>
        <Outlet />
      </main>

      <ContFooter />
    </>
  )
}