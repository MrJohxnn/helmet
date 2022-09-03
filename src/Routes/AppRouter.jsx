import React from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { HelmetHomeCli } from '../HelmetHomeCli'
import { RepClienteF } from '../RepClienteF'
import { RepClienteS } from '../RepClienteS'
import { RepClienteT } from '../RepClienteT'
import { ContFooter } from '../Reutilizables/ContFooter'
import { ContHeader } from '../Reutilizables/ContHead'
import { MenuL } from '../Reutilizables/MenuL'

export const AppRouter = () => {

  return (
    <div className="fondo">
      <ContHeader />
      <MenuL />
      <Routes>
        <Route path='/home' element={<HelmetHomeCli />} />
        <Route path='/accidentes' element={<RepClienteF />} />
        <Route path='/NewAcc' element={<RepClienteS />} />
        <Route path='/cancel' element={<RepClienteF />} />
        <Route path='/repEnviado' element={<RepClienteT />} />
        <Route path='/back' element={<RepClienteF />} />
      </Routes>

      <ContFooter />
    </div>
  )
}