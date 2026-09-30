import { Outlet } from 'react-router-dom'
import { ContHead } from '../Reutilizables/ContHead'
import { ContFooter } from '../Reutilizables/ContFooter'

// Usa aquí el menú de cliente que ya tengas
import { MenuCliente } from '../Reutilizables/Menus/MenuCliente'

export const ClientLayout = () => {
  return (
    <>
      <ContHead />

      <MenuCliente />

      <main>
        <Outlet />
      </main>

      <ContFooter />
    </>
  )
}