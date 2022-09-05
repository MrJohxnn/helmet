import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HelmetHomePro } from '../HelmetHomePro'
import { RepClienteT } from '../RepClienteT'
import { RepProfesionalF } from '../RepProfesionalF'
import { RepProfesionalS } from '../RepProfesionalS'
import { ContFooter } from '../Reutilizables/ContFooter'
import { ContHeader } from '../Reutilizables/ContHead'
import { MenuProf } from '../Reutilizables/MenuProf'

export const AppRouterProf = () => {

  return (
    <div>
      <ContHeader />

      <MenuProf />

      <Routes path="/">
        <Route index element={<HelmetHomePro/>} />
        <Route path='/accProfS' element={<RepProfesionalS />} />
        <Route path='/repEnviado' element={<RepClienteT />} />
        <Route path='/AccProf' element={<RepProfesionalF />} />
      </Routes>

      <ContFooter />
    </div>
  )
}