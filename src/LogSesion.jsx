import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./estilos.css"
import './Reutilizables/estReu.css'

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
              <Form.Control type="email" placeholder="Ingrese usuario" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
            <br />
              <a href="#">Olvidé mi contraseña</a>
            </Form.Group>
            <Button variant="primary" type="submit">
              Iniciar sesión
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}
