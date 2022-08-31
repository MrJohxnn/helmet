import React from 'react'
import 'antd/dist/antd.css'
import "./estilos.css"
import { Header } from "./Reutilizables/Header.jsx"
import { Footer } from "./Reutilizables/Footer.jsx"
import { MenuL } from "./Reutilizables/MenuL.jsx"

export const RepClienteF = () => {
    return (
        <body className="cuerpo">
            <Header />
            <MenuL />
            <div className="repContenedor">
                *Nuevo accidente*Ver estado*Historial*
                <div className="buttonBack">
                    *Volver*
                </div>
            </div>
            <Footer />
        </body>
    )
}
