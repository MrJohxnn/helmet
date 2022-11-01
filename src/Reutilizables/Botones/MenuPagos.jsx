import React from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const MenuPagos = () => {

    // const openModal = document.querySelector('.hero__cta');
    // const modal = document.querySelector('.modal');
    // const closeModal = document.querySelector('.modal__close');

    // openModal.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     modal.classList.add('modal--show');
    // });

    // closeModal.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     modal.classList.remove('modal--show');
    // });

    // TODA ESTA PARTE ME DA ERROR CTM !!!!

    return (
        <>
            <div>
                <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
                    <ToggleButton className="hero__cta" id="tbg-check-1" variant="success" value={2}>
                        Detalle pago
                    </ToggleButton>
                    <ToggleButton id="tbg-check-2" variant="success" value={2}>
                        <Link to="/admin/BackPago">Volver</Link>
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>

            <section className="modal ">
                <div className="modal__container">
                    <h2 className="modal__title">Probando modal</h2>
                    <p className="modal__paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Alias delectus illo temporibus qui dolorem voluptas minus quidem distinctio nemo nostrum, quod illum iusto molestias amet!
                        Similique, delectus corrupti. Voluptate, quidem?</p>
                    <Button className="modal__close" variant="success">Cerrar</Button>
                </div>
            </section>
        </>


    )
}
