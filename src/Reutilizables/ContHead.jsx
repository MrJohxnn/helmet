import { useContext } from 'react'
import { HelmetContext } from '../Context/HelmetContext'
import { CerrarSesion } from './Botones/CerrarSesion.jsx'
import './estReu.css'

export const ContHead = () => {

  const { user } = useContext(HelmetContext)

  return (
    <div className="headerBox">

      <div className="logoHel">
        <a href="#">
          <img
            src={`${import.meta.env.BASE_URL}img/logo.png`}
            alt="logo_helmet"
            className="logoHelmet"
          />
        </a>
      </div>

      <div className="welcomeU">
        <h2>Bienvenido, {user.username}</h2>
      </div>

      <div className="sesion">
        <CerrarSesion />
      </div>

    </div>
  )
}