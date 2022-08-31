import React from 'react'
import 'antd/dist/antd.css'
import "./estilos.css"
import { Header } from "./Reutilizables/Header.jsx"
import { Footer } from "./Reutilizables/Footer.jsx"
import { MenuL } from "./Reutilizables/MenuL.jsx"

export const RepClientesS = () => {
    return (
        <body className="cuerpo">
            <Header />
            <MenuL />
            <div className="repContenedor">
                <div>
                    *Nuevo accidente*Ver estado*Historial*
                </div>
                <div className="nuevoAcc">
                    <div>
                        Nombre trabajador:<br />
                        <br />
                        Rut trabajador:<br />
                        <br />
                        Cargo:<br />
                        <br />
                        Lugar:<br />
                        <br />
                        Observación:
                    </div>
                </div>
                <div className="datosAcc">
                    <input /><br />
                    <br />
                    <input /><br />
                    <br />
                    <input /><br />
                    <br />
                    <input /><br />
                    <br />
                    <input />
                </div>
                <div className="observ">
                    *Cuadro de texto*
                </div>
                <div className="buttonBack">
                    *Volver*
                </div>
            </div>
            <Footer />
        </body>
    )
}
