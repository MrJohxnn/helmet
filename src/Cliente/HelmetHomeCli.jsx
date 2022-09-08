import React from 'react'
import 'antd/dist/antd.css'
import "./estilos.css"
import { ContCliente } from './Reutilizables/ContCliente'

export const HelmetHomeCli = () => {
  return (
    <div className="cuerpo">
      <div className="contenedor">
        <ContCliente />
      </div>
    </div>
  )
}
