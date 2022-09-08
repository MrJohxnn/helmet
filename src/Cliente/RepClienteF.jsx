import React from 'react'
import 'antd/dist/antd.css'
import { MenuAccC } from "./Reutilizables/Botones/MenuAccC.jsx"
import "./estilos.css"
import { HomeButton } from './Reutilizables/Botones/HomeButton.jsx'

export const RepClienteF = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <MenuAccC />
                <div className="buttonHome">
                    <HomeButton />
                </div>
            </div>
        </div>
    )
}
