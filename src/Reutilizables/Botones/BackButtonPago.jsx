import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const BackButtonPago = () => {
  return (
    <div>
        <Button variant="success"><Link to="/admin/BackPago">Volver</Link></Button>
    </div>
  )
}
