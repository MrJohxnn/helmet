import React from 'react'
import 'antd/dist/antd.css'
import "./estilos.css"
import { Alert } from 'antd';

export const HelmetApp = () => {
  return (
    <div className="cuerpo">
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
          
          </div>
        </div>
      </div>
 
    </div>
  )
}
