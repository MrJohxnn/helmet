import React from 'react'
import 'antd/dist/antd.css'
import "../estilos.css"
import { HomeButtonAdmin } from '../Reutilizables/Botones/HomeButtonAdmin.jsx'
import { MenuClieA } from '../Reutilizables/Menus/MenuClieA'

export const ClientAdmF = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <MenuClieA />
                <div className="buttonHome">
                    <HomeButtonAdmin />
                </div>
            </div>
        </div>
    )
}
