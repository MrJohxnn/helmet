import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "./estReu.css"

export const Header = () => {
  return (
    <div className="headerBox">
      <div className="welcomeU">
        <b>Welcome, Mr. PHP</b>
      </div>
      <div className="sesion">
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Perfil</Button>
          <Button variant="secondary">Cerrar sesión</Button>
        </ButtonGroup>
      </div>
    </div>
  )
}