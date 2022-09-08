import React from 'react'
import 'antd/dist/antd.css'
import "../estilos.css"
import { HomeButton } from '../Reutilizables/Botones/HomeButton.jsx'
import { MenuUserA } from '../Reutilizables/Menus/MenuUserA'

export const UsersAdmF = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <MenuUserA />
                <div className="buttonHome">
                    <HomeButton />
                </div>
            </div>
        </div>
    )
}
