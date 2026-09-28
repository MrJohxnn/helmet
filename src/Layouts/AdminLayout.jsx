import React from 'react'
import { Outlet } from 'react-router-dom'
import { ContHead } from '../Reutilizables/ContHead'
import { ContFooter } from '../Reutilizables/ContFooter'
import { MenuAdm } from '../Reutilizables/Menus/MenuAdm'

export const AdminLayout = () => {
  return (
    <>
      <ContHead />

      <MenuAdm />

      <main>
        <Outlet />
      </main>

      <ContFooter />
    </>
  )
}