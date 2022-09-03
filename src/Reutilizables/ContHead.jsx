import { MenSup } from "./Botones/MenSup.jsx"
import "./estReu.css"

export const ContHeader = () => {
  return (
    <div className="headerBox">
      <div className="logoHelmet">
      </div>
      <div className="welcomeU">
        <h2>Bienvenido, *nombre de cliente*</h2>
      </div>
      <div className="sesion">
        <MenSup />
      </div>
    </div>
  )
}