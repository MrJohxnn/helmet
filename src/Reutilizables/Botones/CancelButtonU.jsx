import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const CancelButtonU = () => {
  return (
    <div>
        <Button variant="outline-danger"><Link to="/admin/listUsers">Cancelar</Link></Button>
    </div>
  )
}
