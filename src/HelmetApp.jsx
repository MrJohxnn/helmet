import { Alert } from 'antd';
import React from 'react'
import 'antd/dist/antd.css'
import "./estilos.css"
import { Header } from "./Reutilizables/Header.jsx"
import { Footer } from "./Reutilizables/Footer.jsx"
import { MenuL } from "./Reutilizables/MenuL.jsx"
import { Tabla } from "./Reutilizables/Tabla.jsx"

export const HelmetApp = () => {
  return (
    <body className="cuerpo">
      <Header />
      <MenuL />
      <div className="contenedor">
        <div className="boxOne">
          <div className="oneTitle">
            <b>Accidentes</b>
          </div>
          <br />
          <div className="contOne">
            <Alert
              message="47 días"
              description="Sin accidentes."
              type="success"
              showIcon
            />
          </div>
        </div>
        <div className="boxTwo">
          <div className="twoTitle">
            <b>Capacitaciones</b>
          </div>
          <div className="contTwo">
            <Alert
              message="27 capacitaciones"
              description="3 capacitaciones nuevas."
              type="info"
              showIcon
            />
          </div>
        </div>
        <div className="boxThree">
          <div className="threeTitle">
            <Tabla />
          </div>
        </div>
      </div>
      <Footer />
    </body>
  )
}
