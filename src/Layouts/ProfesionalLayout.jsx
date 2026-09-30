import { Outlet } from 'react-router-dom'
import { ContHead } from '../Reutilizables/ContHead'
import { ContFooter } from '../Reutilizables/ContFooter'

// Usa aquí el menú de profesional que ya tengas
import { MenuPro } from '../Reutilizables/Menus/MenuPro'

export const ProfesionalLayout = () => {
  return (
    <>
      <ContHead />

      <MenuPro />

      <main>
        <Outlet />
      </main>

      <ContFooter />
    </>
  )
}