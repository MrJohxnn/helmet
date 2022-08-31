import React from 'react'
import { Routes,Route } from "react-router-dom"
import { HelmetApp } from '../HelmetApp'

export const AppRouter = () => {
  return (
    <>
        <Routes path="/">
            <Route path="/" element={<HelmetApp />} />
        </Routes>
    </>
  )
}
