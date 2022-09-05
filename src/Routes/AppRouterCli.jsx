import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HelmetHomeCli } from '../HelmetHomeCli'
import { RepClienteF } from '../RepClienteF'
import { RepClienteS } from '../RepClienteS'
import { RepClienteT } from '../RepClienteT'
import { ContFooter } from '../Reutilizables/ContFooter'
import { ContHeader } from '../Reutilizables/ContHead'
import { MenuCliente } from '../Reutilizables/MenuCliente'

export const AppRouterCli = () => {
  return (
    <div>
      <ContHeader />

      <MenuCliente />

      <Routes path="/">
        <Route index element={<HelmetHomeCli/>} />
        <Route path='/AccCli' element={<RepClienteF />} />
        <Route path='/NewAcc' element={<RepClienteS />} />
        <Route path='/cancel' element={<RepClienteF />} />
        <Route path='/repEnviado' element={<RepClienteT />} />
      </Routes>

      <ContFooter />
    </div>
  )
}