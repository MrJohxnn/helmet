import React from 'react'
import { HomeButton } from "../Reutilizables/Botones/HomeButton.jsx"
import { CancelButtonC } from '../Reutilizables/Botones/CancelButtonC.jsx';
import { Select } from 'antd';
import { Input } from 'antd';
import 'antd/dist/antd.css'
import "../estilos.css"
import { SaveButton } from '../Reutilizables/Botones/SaveButton.jsx';

const { TextArea } = Input;

const handleClick = () => setLoading(true);

const { Option } = Select;

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

export const UsersAdmS = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <div className="TittleNewUser">
                    <h3>Registro de usuario nuevo</h3>
                </div>
                <table className="nuevoUser">
                    <tr>
                        <td>Nombre :</td>
                        <td><Input placeholder="Bruce Wayne" className="inputDefectoA"/></td>
                        <td>Tipo de usuario :</td>
                        <td><Select
                            className="nivel"
                            defaultValue="- Seleccionar -"
                            style={{
                                width: 150,
                            }}
                            onChange={handleChange}
                        >
                            <Option value="Administrador">Administrador</Option>
                            <Option value="Cliente">Cliente</Option>
                            <Option value="Profesional">Profesional</Option>
                        </Select></td>
                    </tr>
                    <br />
                    <tr>
                        <td>Rut :</td>
                        <td><Input placeholder="12345678-9" className="inputDefectoA"/></td>
                    </tr>
                    <br />
                    <tr>
                        <td>Nombre usuario :</td>
                        <td><Input placeholder="bwayne" className="inputDefectoA"/></td>
                    </tr>
                    <br />
                    <tr>
                        <td>Empresa :</td>
                        <td><Input placeholder="Wayne Industries" className="inputDefectoA"/></td>
                    </tr>
                    <br />
                    <tr>
                        <td>Email :</td>
                        <td><Input placeholder="bwayne@wayneind.com" className="inputDefectoA"/></td>
                    </tr>
                    <br />
                    <tr>
                        <td>Contraseña :</td>
                        <td><Input placeholder="Genérica tipo B12345678W" type="password" className="inputDefectoA"/></td>
                    </tr>
                </table>
                
                <div className="buttonsA">
                    <SaveButton />
                    <CancelButtonC />
                </div>
                <div className="homeA">
                    <HomeButton />
                </div>
            </div>
        </div >
    )
}
