import React from 'react'
import 'antd/dist/antd.css'
import "../estilos.css"
import Button from 'react-bootstrap/Button';
import { HomeButtonAdmin } from '../Reutilizables/Botones/HomeButtonAdmin';
import { BackButtonAct } from '../Reutilizables/Botones/BackButtonAct';

export const ActClientesDetail1 = () => {

    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <div className="codEmpresa">
                    <h2>Empresa #100001</h2>
                </div>
                <table className="pagoDetail">
                    <tr>
                        <td><b>Empresa :</b></td>
                        <td>Mercadolibre CL</td>
                        <td><b>Profesional a cargo :</b></td>
                        <td>Verónica Proboste</td>
                    </tr>
                    <br />
                    <tr>
                        <td><b>Rut empresa :</b></td>
                        <td>11.111.111-1</td>
                    </tr>
                    <br />
                    <br />
                    <tr className="buttonsAct">
                        {/* sólo botones popup */}
                        <td><Button className="buttonsAct" variant="outline-success">Visitas</Button></td>
                        <td><Button className="buttonsAct" variant="outline-success">Capacitaciones</Button></td>
                        <td><Button className="buttonsAct" variant="outline-success">Asesorías</Button></td>
                        <td><Button className="buttonsAct" variant="outline-success">Llamados</Button></td>
                    </tr>
                    <br />
                    <tr className="buttonsAct">
                        <td><Button className="buttonsAct" variant="outline-success">Implementaciones</Button></td>
                        <td><Button className="buttonsAct" variant="outline-success">Accidentes</Button></td>
                        <td><Button className="buttonsAct" variant="outline-secondary" disabled>Multas</Button></td>
                        <td><Button className="buttonsAct" variant="outline-success">Informes</Button></td>
                    </tr>
                </table>
                <div className="SetButtonsPago">
                    <div className="buttonsPago">
                        <BackButtonAct /> 
                    </div>
                    <div className="homePago">
                        <HomeButtonAdmin />
                    </div>
                </div>
            </div>
        </div>
    )
}