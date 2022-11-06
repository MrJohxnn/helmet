import React from 'react'
import Button from 'react-bootstrap/Button';

export const ModalCerSesion = ({ setStateCerSesion }) => {

    const closeCerSesion = () => {
        setStateCerSesion(false);
    }

    return (
        <div className="cuerpoModal animate__animated animate__fadeIn">
            <div className="contModalS">
                <h2 className="titModalS">¿Desea cerrar sesión?</h2>
                <Button className="animate__animated" variant="danger">Cerrar sesión</Button>
                <Button onClick={closeCerSesion} className="animate__animated" variant="outline-success">Cancelar</Button>
            </div>
        </div>
    )
}