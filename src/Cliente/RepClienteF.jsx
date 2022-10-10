import React from 'react'
import 'antd/dist/antd.css'
import { MenuAccC } from "../Reutilizables/Botones/MenuAccC.jsx"
import "../estilos.css"
import { HomeButtonCli } from '../Reutilizables/Botones/HomeButtonCli.jsx'

export const RepClienteF = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <MenuAccC />
                <div className="buttonHome">
                    <HomeButtonCli />
                </div>
            </div>
        </div>
    )
}
