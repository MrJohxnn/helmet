import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const CancelButton = () => {
  return (
    <div>
        <Button variant="outline-danger"><Link to="/cancel">Cancelar</Link></Button>
    </div>
  )
}
