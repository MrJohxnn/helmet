import { Outlet } from 'react-router-dom'
import { ContHead } from '../Reutilizables/ContHead'
import { ContFooter } from '../Reutilizables/ContFooter'

// Usa aquí el menú de cliente que ya tengas
import { MenuCli } from '../Reutilizables/Menus/MenuCli'

export const ClientLayout = () => {
  return (
    <>
      <ContHead />

      <MenuCli />

      <main>
        <Outlet />
      </main>

      <ContFooter />
    </>
  )
}