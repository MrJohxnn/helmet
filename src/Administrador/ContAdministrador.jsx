import React from 'react'
import { Alert } from 'antd';
import { Progress, Tooltip } from 'antd';

export const ContAdministrador = () => {
  
  return (
    <div>
      <div className="boxOne">
        <div className="oneTitle">
          <h5>Accidentes</h5>
        </div>
        <br />
        <div className="contOne">
          <Alert
            message="32 clientes"
            description="Clientes nuevos : 4"
            type="success"
            showIcon
          />
        </div>
      </div>
      <div className="boxTwo">
        <div className="twoTitle">
          <h5>Capacitaciones</h5>
        </div>
        <div className="contTwo">
          <Alert
            message="27 capacitaciones"
            description="Capacitaciones nuevas : 3 Capacitaciones pendientes : 4"
            type="info"
            showIcon
          />
        </div>
      </div>
      <div className="boxThree">
        <div className="threeTitle">
          <h5>Accidentabilidad</h5>
        </div>
        <div className="contThree">
          <Tooltip title="Muy grave">
            <Progress percent={60} strokeColor="red" />
          </Tooltip>
          <Tooltip title="Grave">
            <Progress percent={25} strokeColor="yellow" />
          </Tooltip>
          <Tooltip title="Medio">
            <Progress percent={10} />
          </Tooltip>
          <Tooltip title="Leve">
            <Progress percent={5} strokeColor="green" />
          </Tooltip>
        </div>
      </div >
      <div className="boxFour">
        <div className="fourTitle">
          <h5>Pagos de clientes</h5>
        </div>
        <div className="contFour">
          <Tooltip title="Al día / Pendientes">
            <Progress type="dashboard" percent={76} />
          </Tooltip>
        </div>
      </div>
    </div >
  )
}
