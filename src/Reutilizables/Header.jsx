import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "./estReu.css"

export const Header = () => {
  return (
    <div className="headerBox">
      <div className="welcomeU">
        <b>Bienvenido, nombre de cliente</b>
      </div>
      <div className="sesion">
        <ButtonGroup aria-label="Basic example">
          <Button variant="warning">Perfil</Button>
          <Button variant="warning">Cerrar sesión</Button>
        </ButtonGroup>
      </div>
    </div>
  )
}