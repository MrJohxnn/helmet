import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const HomeButtonAdmin = () => {
  return (
    <div>
        <Button variant="outline-success"><Link to="/admin">Home</Link></Button>
    </div>
  )
}
