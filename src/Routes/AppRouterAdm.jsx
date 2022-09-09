import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HelmetHomeAdm } from '../Administrador/HelmetHomeAdm'
import { UsersAdmF } from '../Administrador/UsersAdmF'
import { UsersAdmS } from '../Administrador/UsersAdmS'
import { UsersAdmT } from '../Administrador/UsersAdmT'
import { ContFooter } from '../Reutilizables/ContFooter'
import { ContHead } from '../Reutilizables/ContHead'
import { MenuAdm } from '../Reutilizables/Menus/MenuAdm'
import { UsersAdmMain } from '../Administrador/UsersAdmMain'
import { UsersDetailAdm } from '../Administrador/UsersDetailAdm'
import { UsersDetailSaved } from '../Administrador/UsersDetailSaved'

export const AppRouterAdm = () => {

  return (
    <div>
      <ContHead />

      <MenuAdm />

      <Routes path="/">
        <Route index element={<HelmetHomeAdm />} />
        <Route path='/AccAdm' element={<UsersAdmF />} />
        <Route path='/NewUser' element={<UsersAdmS />} />
        <Route path='/saveNewUser' element={<UsersAdmT />} />
        <Route path="/listUsers" element={<UsersAdmMain />} />
        <Route path="/detailUsers" element={<UsersDetailAdm />} />
        <Route path="/saveDetailUser" element={<UsersDetailSaved />} />
      </Routes>

      <ContFooter />
    </div>
  )
}