import { Alert } from 'antd';
import React from 'react'
import "./estilos.css"
import {Header} from "./Reutilizables/Header.jsx"
import {MenuL} from "./Reutilizables/MenuL.jsx"

export const HelmetApp = () => {
  return (
    <body className="cuerpo">
      <Header />
      <MenuL />
      <div className="contenedor">
        <div className="boxOne">
          <div className="contOne">
            
            <div className="OneOne">
              
            </div>
            <div className="OneTwo">
              45 días
            </div>
            <div className="OneThree">
              sin accidentes
            </div>
          </div>
        </div>
        <div className="boxTwo">
          <div className="contTwo">
            Caja 2
          </div>
        </div>
        <div className="boxThree">
          <div className="contThree">
            Caja 3
            <br/>caja 3.2
            <br/>caja 3.3
            <br/>caja 3.4
            <br/>pooolento
          </div>
        </div>
        <div className="boxFour">
          <div className="contFour">
            Caja 4
            <br/>caja 4.2
            <br/>pooolento
          </div>
        </div>
      </div>
    </body>
  )
}
