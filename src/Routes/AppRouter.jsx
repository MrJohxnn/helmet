import React from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { HelmetApp } from '../HelmetApp'
import { Prueba } from '../Prueba'
import { RepClienteF } from '../RepClienteF'
import { Footer } from '../Reutilizables/Footer'
import { Header } from '../Reutilizables/Header'
import { MenuL } from '../Reutilizables/MenuL'

export const AppRouter = () => {
  return (
    <>
        <Header />
        <MenuL />
        
        <Routes>
            <Route path='/' element={<HelmetApp />} />
            <Route path='/accidentes' element={<RepClienteF />} />
            <Route path='/' element={<HelmetApp />} />
            <Route path='/' element={<HelmetApp />} />
            <Route path='/prueba' element={<Prueba />} />
        </Routes>

        <Footer />
        <h3>dfsdssd</h3>
    </>
  )
}
