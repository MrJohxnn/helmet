import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const BackButton = () => {
  return (
    <div>
        <Button variant="success"><Link to="/back">Volver</Link></Button>
    </div>
  )
}
