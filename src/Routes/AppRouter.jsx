import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HelmetHomePro } from '../HelmetHomePro'
import { HelmetHomeCli } from '../HelmetHomeCli'
import { RepClienteF } from '../RepClienteF'
import { RepClienteS } from '../RepClienteS'
import { RepClienteT } from '../RepClienteT'
import { RepProfesionalF } from '../RepProfesionalF'
import { RepProfesionalS } from '../RepProfesionalS'
import { ContFooter } from '../Reutilizables/ContFooter'
import { ContHeader } from '../Reutilizables/ContHead'
import { MenuProf } from '../Reutilizables/MenuProf'

export const AppRouter = () => {

  return (
    <div>
      <ContHeader />

      <MenuProf />

      <Routes path="/">
        <Route index element={<HelmetHomeCli/>} />
        <Route path='/accProfS' element={<RepProfesionalS />} />
        <Route path='/AccCli' element={<RepClienteF />} />
        <Route path='/NewAcc' element={<RepClienteS />} />
        <Route path='/cancel' element={<RepClienteF />} />
        <Route path='/repEnviado' element={<RepClienteT />} />
        <Route path='/AccProf' element={<RepProfesionalF />} />
      </Routes>

      <ContFooter />
    </div>
  )
}