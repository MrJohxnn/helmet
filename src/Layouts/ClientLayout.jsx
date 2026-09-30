import { Outlet } from 'react-router-dom'
import { ContHead } from '../Reutilizables/ContHead'
import { ContFooter } from '../Reutilizables/ContFooter'

// Usa aquí el menú de cliente que ya tengas
import { MenuClieA } from '../Reutilizables/Menus/MenuClieA'

export const ClientLayout = () => {
  return (
    <>
      <ContHead />

      <MenuClieA />

      <main>
        <Outlet />
      </main>

      <ContFooter />
    </>
  )
}