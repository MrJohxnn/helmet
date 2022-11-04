import React from 'react'
import Button from 'react-bootstrap/Button';

export const ModalPago = ({ setStateModal }) => {

    const closeModal = () => {
        setStateModal(false);
    }

    return (
        <div className="cuerpoModal">
            <div className="contModal">
                <h2 className="titModal">Hola Hola</h2>
                <p className="textoModal">
                    Insertar tabla
                    ver animación con Panchisco 12:10
                </p>
                <Button onClick={closeModal} variant="outline-success">Cerrar</Button>
            </div>
        </div>
    )
}
