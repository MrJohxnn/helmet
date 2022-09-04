import React from 'react'
import 'antd/dist/antd.css'
import "./estilos.css"
import { HomeButton } from './Reutilizables/Botones/HomeButton.jsx'
import { TablaAccidentes } from './Reutilizables/TablaAccidentes'

export const RepProfesionalF = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <h3>Reporte de accidentes</h3>
                    <TablaAccidentes />
                <div className="buttonHome">
                    <HomeButton />
                </div>
            </div>
        </div>
    )
}
