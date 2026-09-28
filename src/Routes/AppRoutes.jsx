import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { ProtectedRoute } from './ProtectedRoute'

// Layouts
import { AdminLayout } from '../Layouts/AdminLayout'
// import { ClientLayout } from '../Layouts/ClientLayout'
// import { ProfessionalLayout } from '../Layouts/ProfessionalLayout'

// Auth
import { LogSesion } from '../Auth/LogSesion'

// Administrador
import { HelmetHomeAdm } from '../Administrador/HelmetHomeAdm'
import { UsersAdmS } from '../Administrador/UsersAdmS'
import { UsersAdmT } from '../Administrador/UsersAdmT'
import { UsersAdmMain } from '../Administrador/UsersAdmMain'
import { UsersDetailAdm } from '../Administrador/UsersDetailAdm'
import { UsersDetailSaved } from '../Administrador/UsersDetailSaved'
import { ClientAdmS } from '../Administrador/ClientAdmS'
import { ClientAdmT } from '../Administrador/ClientAdmT'
import { ClientAdmMain } from '../Administrador/ClientAdmMain'
import { AdmPagosMain } from '../Administrador/AdmPagosMain'
import { AdmPagosDetail1 } from '../Administrador/AdmPagosDetail1'
import { AdmPagosDetail2 } from '../Administrador/AdmPagosDetail2'
import { Accidentabilidad } from '../Administrador/Accidentabilidad'
import { ActClientes } from '../Administrador/ActClientes'
import { ActClientesDetail1 } from '../Administrador/ActClientesDetail1'
import { ReportesMain } from '../Administrador/ReportesMain'
import { RendimientoMain } from '../Administrador/RendimientoMain'
import { RendimientoDet1 } from '../Administrador/RendimientoDet1'

export const AppRoutes = () => {
  return (
    <Routes>

      <Route
        path="/"
        element={<Navigate to="/auth" replace />}
      />

      <Route
        path="/auth"
        element={<LogSesion />}
      />

      {/* ADMINISTRADOR */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<HelmetHomeAdm />} />

        <Route path="new-user" element={<UsersAdmS />} />
        <Route path="save-new-user" element={<UsersAdmT />} />
        <Route path="users" element={<UsersAdmMain />} />
        <Route path="users/detail" element={<UsersDetailAdm />} />
        <Route path="users/saved" element={<UsersDetailSaved />} />

        <Route path="new-client" element={<ClientAdmS />} />
        <Route path="save-new-client" element={<ClientAdmT />} />
        <Route path="clients" element={<ClientAdmMain />} />

        <Route path="payments" element={<AdmPagosMain />} />
        <Route path="payments/detail-1" element={<AdmPagosDetail1 />} />
        <Route path="payments/detail-2" element={<AdmPagosDetail2 />} />

        <Route path="accidentabilidad" element={<Accidentabilidad />} />

        <Route path="activities" element={<ActClientes />} />
        <Route path="activities/detail" element={<ActClientesDetail1 />} />

        <Route path="reports" element={<ReportesMain />} />

        <Route path="performance" element={<RendimientoMain />} />
        <Route path="performance/detail" element={<RendimientoDet1 />} />
      </Route>

      {/* CLIENTE */}
      <Route
        path="/cliente"
        element={
          <ProtectedRoute allowedRoles={['cliente']}>
            <div>Panel cliente</div>
          </ProtectedRoute>
        }
      />

      {/* PROFESIONAL */}
      <Route
        path="/profesional"
        element={
          <ProtectedRoute allowedRoles={['profesional']}>
            <div>Panel profesional</div>
          </ProtectedRoute>
        }
      />

      <Route
        path="*"
        element={<Navigate to="/auth" replace />}
      />

    </Routes>
  )
}