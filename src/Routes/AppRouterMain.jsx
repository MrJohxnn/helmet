import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LogSesion } from '../LogSesion'
import { AppRouterCli } from './AppRouterCli'
import { AppRouterProf } from './AppRouterProf'

export const AppRouterMain = () => {
    return (
        <div>

            <LogSesion />

            <Routes path="/*">
                <Route path='/cliente/*' element={<AppRouterCli />} />
                <Route path='/profesional/*' element={<AppRouterProf />} />
            </Routes>
        </div>
    )
}
