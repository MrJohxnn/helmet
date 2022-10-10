import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import React from 'react'
import '../estReu.css'
import 'antd/dist/antd.css'

export const MenuAdm = () => {
  return (
    <div className="contMenu">
      <ul className="contMenuL">
        <li className="actInformacion p-1" >
          <Button variant="warning"><Link to="admin/AccAdm">Administrar usuarios</Link></Button>
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
              <Dropdown.Item eventKey="1"><Link to="admin/PagosMain">Pagos</Link></Dropdown.Item>
              <Dropdown.Item eventKey="2">Calcular accidentabilidad</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="3">Visualizar actividades</Dropdown.Item>
            </DropdownButton>
          ))}
        </li>
        <li className="actInformacion p-1" >
          <Button variant="warning">Reportes de cliente</Button>
        </li>
        <li className="actInformacion p-1" >
          <Button variant="warning">Indicadores</Button>
        </li>
      </ul>
    </div >

  )
}
