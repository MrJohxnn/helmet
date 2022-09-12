import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import React from 'react'
import '../estReu.css'
import 'antd/dist/antd.css'

export const MenuProf = () => {
  return (
    <div className="contMenu">
      <ul className="contMenuL">
        <li className="actInformacion p-1" >
          <Button variant="warning">Actualizar información</Button>
        </li>
        <li className="accidentes p-1">
          <Button variant="warning"><Link to="/AccProf">Accidentes</Link></Button>
        </li>
        <li className="clientes p-1">
          {['end'].map((direction) => (
            <DropdownButton
              key={direction}
              id={`clientes`}
              drop={direction}
              variant="warning"
              title={` Clientes `}
            >
              <Dropdown.Item eventKey="1">Revisar clientes</Dropdown.Item>
              <Dropdown.Item eventKey="2">Ingresar mejoras</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="3">Visualizar actividades</Dropdown.Item>
            </DropdownButton>
          ))}
        </li>
        <li className="capacitaciones p-1">
          {['end'].map((direction) => (
            <DropdownButton
              key={direction}
              id={`capacitaciones`}
              drop={direction}
              variant="warning"
              title={` Capacitaciones `}
            >
              <Dropdown.Item eventKey="1">Nueva capacitación</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="2">Planificar visitas</Dropdown.Item>
            </DropdownButton>
          ))}
        </li>
        <li className="asesorias p-1">
          {['end'].map((direction) => (
            <DropdownButton
              key={direction}
              id={`asesorias`}
              drop={direction}
              variant="warning"
              title={` Asesorías `}
            >
              <Dropdown.Item eventKey="1">Nuevo checklist</Dropdown.Item>
              <Dropdown.Item eventKey="2">Responder checklist</Dropdown.Item>
            </DropdownButton>
          ))}
        </li>
      </ul>
    </div >

  )
}
