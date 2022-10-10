import React from 'react'
import 'antd/dist/antd.css'
import "../estilos.css"
import { TablaAccidentes } from '../Reutilizables/TablaAccidentes'
import { HomeButtonProf } from '../Reutilizables/Botones/HomeButtonProf'

export const RepProfesionalF = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <h3 className="repTitle">Reporte de accidentes</h3>
                    <TablaAccidentes />
                <div className="buttonHome">
                    <HomeButtonProf />
                </div>
            </div>
        </div>
    )
}
