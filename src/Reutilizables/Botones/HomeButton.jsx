import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const HomeButton = () => {
  return (
    <div>
        <Button variant="outline-success"><Link to="/home">Home</Link></Button>
    </div>
  )
}
