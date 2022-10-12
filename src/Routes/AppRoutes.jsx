import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Accidentabilidad } from '../Administrador/Accidentabilidad'
import { ActClientes } from '../Administrador/ActClientes'
import { ActClientesDetail1 } from '../Administrador/ActClientesDetail1'
import { AdmPagosDetail1 } from '../Administrador/AdmPagosDetail1'
import { AdmPagosDetail2 } from '../Administrador/AdmPagosDetail2'
import { AdmPagosMain } from '../Administrador/AdmPagosMain'
import { HelmetHomeAdm } from '../Administrador/HelmetHomeAdm'
import { RendimientoDet1 } from '../Administrador/RendimientoDet1'
import { RendimientoMain } from '../Administrador/RendimientoMain'
import { ReportesMain } from '../Administrador/ReportesMain'
import { UsersAdmF } from '../Administrador/UsersAdmF'
import { UsersAdmMain } from '../Administrador/UsersAdmMain'
import { UsersAdmS } from '../Administrador/UsersAdmS'
import { UsersAdmT } from '../Administrador/UsersAdmT'
import { UsersDetailAdm } from '../Administrador/UsersDetailAdm'
import { UsersDetailSaved } from '../Administrador/UsersDetailSaved'
import { LogSesion } from '../Auth/LogSesion'
import { ContFooter } from '../Reutilizables/ContFooter'
import { ContHead } from '../Reutilizables/ContHead'
import { MenuAdm } from '../Reutilizables/Menus/MenuAdm'

export const AppRoutes = () => {
  return (
    <div>
    <ContHead />

    <MenuAdm />

    <Routes>

        {/* rutas para login */}
        <Route path="/auth" element={<LogSesion/>} />
    
        {/* rutas para administrador */}
        <Route path="/admin" element={<HelmetHomeAdm />} />
        <Route path='/admin/AccAdm' element={<UsersAdmF />} />
        <Route path='/admin/NewUser' element={<UsersAdmS />} />
        <Route path='/admin/saveNewUser' element={<UsersAdmT />} />
        <Route path="/admin/listUsers" element={<UsersAdmMain />} />
        <Route path="/admin/detailUsers" element={<UsersDetailAdm />} />
        <Route path="/admin/saveDetailUser" element={<UsersDetailSaved />} />
        <Route path="/admin/PagosMain" element={<AdmPagosMain />} />
        <Route path="/admin/PagoDetail1" element={<AdmPagosDetail1 />} />
        <Route path="/admin/PagoDetail2" element={<AdmPagosDetail2 />} />
        <Route path="/admin/BackPago" element={<AdmPagosMain />} />
        <Route path="/admin/accidentabilidad" element={<Accidentabilidad />} />
        <Route path="/admin/actividades" element={<ActClientes />} />
        <Route path="/admin/ActClientesDetail1" element={<ActClientesDetail1 />} />
        <Route path="/admin/BackAct" element={<ActClientes />} />
        <Route path="/admin/ReportesMain" element={<ReportesMain />} />
        <Route path="/admin/RendimientoMain" element={<RendimientoMain />} />
        <Route path="/admin/RendimientoDet1" element={<RendimientoDet1 />} />

        {/* rutas para clientes */}

        
        {/* rutas para profesionales */}



    </Routes>
    <ContFooter />
    </div>
  )
}
