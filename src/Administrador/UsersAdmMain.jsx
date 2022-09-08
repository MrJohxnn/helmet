import React from 'react'
import 'antd/dist/antd.css'
import "../estilos.css"
import { HomeButton } from '../Reutilizables/Botones/HomeButton.jsx'
import { TablaUsuarios } from '../Reutilizables/TablaUsuarios'
import { BarraBuscar } from '../Reutilizables/BarraBuscar'
import { NewUserButton } from '../Reutilizables/Botones/NewUserButton'

export const UsersAdmMain = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <div className="botonNuevoUsuario">
                    <NewUserButton />
                </div>
                <h3 className="usersTitle">
                    Lista de usuarios
                </h3>
                <div className="buscar">
                    <BarraBuscar />
                </div>
                <TablaUsuarios />
                <div className="buttonHome">
                    <HomeButton />
                </div>
            </div>
        </div>
    )
}
