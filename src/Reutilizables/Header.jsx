import { MenSup } from "./Botones/MenSup.jsx"
import "./estReu.css"

export const Header = () => {
  return (
    <div className="headerBox">
      <div className="logoHelmet">
        <a href="#"></a>
      </div>
      <div className="welcomeU">
        <b>Bienvenido, nombre de cliente</b>
      </div>
      <div className="sesion">
        <MenSup />
      </div>
    </div>
  )
}