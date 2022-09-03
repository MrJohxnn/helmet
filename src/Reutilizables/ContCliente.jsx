import React from 'react'
import { Alert } from 'antd';
import { TablaMain } from "./TablaMain.jsx"


export const ContCliente = () => {
    return (
    <div>
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
            <TablaMain />
          </div>
        </div>
    </div>
    )
}
