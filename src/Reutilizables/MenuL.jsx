import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import React from 'react'
import './estReu.css'
import 'antd/dist/antd.css'

export const MenuL = () => {
  return (
    <Router>
      <ul className="contMenu">
        <li className="Accidentes p-1" >
          {['end'].map((direction) => (
            <DropdownButton
              key={direction}
              id={`accidentes`}
              drop={direction}
              variant="warning"
              title={` Accidentes `}
            >
              <Dropdown.Item eventKey="1">Historial de accidentes</Dropdown.Item>
              <Dropdown.Item eventKey="2">Ver estado accidentes</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="3"><Link to="./RepCliente.jsx">Reportar accidente</Link></Dropdown.Item>
            </DropdownButton>
          ))}
        </li>
        <li className="reportes p-1">
          {['end'].map((direction) => (
            <DropdownButton
              key={direction}
              id={`reportes`}
              drop={direction}
              variant="warning"
              title={` Reportes `}
            >
              <Dropdown.Item eventKey="1">Visualizar reportes</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="2">Solicitar reporte</Dropdown.Item>
            </DropdownButton>
          ))}
        </li>
        <li className="solicitudes p-1">
          {['end'].map((direction) => (
            <DropdownButton
              key={direction}
              id={`solicitudes`}
              drop={direction}
              variant="warning"
              title={` Solicitudes `}
            >
              <Dropdown.Item eventKey="1">Solicitar visitas</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="2">Solicitar reporte</Dropdown.Item>
            </DropdownButton>
          ))}
        </li>
      </ul>
    </Router>
  )
}
