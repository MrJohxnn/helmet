import React from 'react'
import 'antd/dist/antd.css'
import { ContAdministrador } from './ContAdministrador'
import "../estilos.css"
import "../estilos_modal.css"

export const HelmetHomeAdm = () => {
  return (
    <div className="cuerpo">
      
      <div className="contenedor">
        <ContAdministrador />
      </div>
    </div>
  )
}
