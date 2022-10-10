import React from 'react'
import 'antd/dist/antd.css'
import "../estilos.css"
import { HomeButtonAdmin } from '../Reutilizables/Botones/HomeButtonAdmin.jsx'
import { BarraBuscar } from '../Reutilizables/BarraBuscar'
import { TablaClientes } from '../Reutilizables/TablaClientes'

export const AdmPagosMain = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <h3 className="usersTitle">
                    Pagos de clientes
                </h3>
                <div className="buscar">
                    <BarraBuscar />
                </div>
                <TablaClientes />
                <div className="buttonHome">
                    <HomeButtonAdmin />
                </div>
            </div>
        </div>
    )
}
