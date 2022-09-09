import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const NewUserButton = () => {
  return (
    <div>
        <Button variant="success"><Link to="/DetailUser">Nuevo usuario</Link></Button>
    </div>
  )
}
