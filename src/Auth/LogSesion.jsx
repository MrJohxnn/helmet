import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import "../estilos.css"
import '../Reutilizables/estReu.css'

export const LogSesion = () => {
  return (
    <div className="iniSesion">
      <div className="headLogin">
        <div>
          <img className="imgHelmet" src="img/logo.png" />
          <h1>Bienvenido</h1>
        </div>
        <div className='formLogin'>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="text" placeholder="Ingrese usuario" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
              <br />
              <a href="#">Olvidé mi contraseña</a>
            </Form.Group>
            <Button variant="success" type="submit">
              <Link to="/clienteM">
                Iniciar sesión
              </Link>
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}
