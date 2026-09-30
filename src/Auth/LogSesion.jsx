import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'

import { HelmetContext } from '../Context/HelmetContext'

import '../estilos.css'
import '../Reutilizables/estReu.css'

export const LogSesion = () => {

  const { login } = useContext(HelmetContext)
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // Usuarios temporales para probar los roles
  const users = [
    {
      username: 'admin',
      password: '1234',
      name: 'Administrador',
      role: 'admin'
    },
    {
      username: 'cliente',
      password: '1234',
      name: 'Cliente',
      role: 'cliente'
    },
    {
      username: 'profesional',
      password: '1234',
      name: 'Profesional',
      role: 'profesional'
    },
    {
      username: 'jgomezn',
      password: '1234',
      name: 'Johann Gómez',
      role: 'profesional'
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()

    const foundUser = users.find(
      (user) =>
        user.username === username &&
        user.password === password
    )

    if (!foundUser) {
      setError('Usuario o contraseña incorrectos')
      return
    }

    // Guardamos usuario y rol en HelmetProvider
    login(foundUser.username, foundUser.name, foundUser.role)

    // Redirigimos según el rol
    switch (foundUser.role) {
      case 'admin':
        navigate('/admin')
        break

      case 'cliente':
        navigate('/cliente')
        break

      case 'profesional':
        navigate('/profesional')
        break

      default:
        navigate('/auth')
    }
  }

  return (
    <div className="iniSesion">

      <div className="headLogin">

        <div>
          <img
            className="imgHelmet"
            src="img/logo.png"
            alt="Helmet"
          />

          <h1>Bienvenido</h1>
        </div>

        <div className="formLogin">

          <Form onSubmit={handleSubmit}>

            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
            >
              <Form.Label>Usuario</Form.Label>

              <Form.Control
                type="text"
                placeholder="Ingrese usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
            >
              <Form.Label>Contraseña</Form.Label>

              <Form.Control
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <br />

              <a href="#">Olvidé mi contraseña</a>

            </Form.Group>

            {error && (
              <p className="text-danger">
                {error}
              </p>
            )}

            <Button
              variant="success"
              type="submit"
            >
              Iniciar sesión
            </Button>

          </Form>

        </div>
      </div>
    </div>
  )
}