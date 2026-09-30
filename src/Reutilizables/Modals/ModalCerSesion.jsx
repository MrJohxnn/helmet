import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { HelmetContext } from '../../Context/HelmetContext.jsx'

export const ModalCerSesion = ({ setStateCerSesion }) => {

  const { logout } = useContext(HelmetContext)
  const navigate = useNavigate()

  const closeCerSesion = () => {
    setStateCerSesion(false)
  }

  const handleLogout = () => {
    // 1. Eliminamos la sesión
    logout()

    // 2. Cerramos el modal
    setStateCerSesion(false)

    // 3. Volvemos al login
    navigate('/auth', { replace: true })
  }

  return (
    <div className="cuerpoModal animate__animated animate__fadeIn">
      <div className="contModalS">

        <h2 className="titModalS">
          ¿Desea cerrar sesión?
        </h2>

        <Button
          onClick={handleLogout}
          className="animate__animated"
          variant="danger"
        >
          Cerrar sesión
        </Button>

        <Button
          onClick={closeCerSesion}
          className="animate__animated"
          variant="outline-success"
        >
          Cancelar
        </Button>

      </div>
    </div>
  )
}