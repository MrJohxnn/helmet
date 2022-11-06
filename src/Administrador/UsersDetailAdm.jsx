import React from 'react'
import { HomeButtonAdmin } from "../Reutilizables/Botones/HomeButtonAdmin.jsx"
import { Select } from 'antd';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import 'antd/dist/antd.css'
import "../estilos.css"
import { MenuAccB } from '../Reutilizables/Menus/MenuUserB.jsx';

const { Option } = Select;

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

export const UsersDetailAdm = () => {
    return (
        <div className="cuerpo">
            <div className="repContenedor">
                <div className="TittleNewUser">
                    <h3>Detalles de usuario</h3>
                </div>
                <table className="nuevoUser">
                    <tr>
                        <td>Nombre :</td>
                        <td><Input placeholder="Bruce Wayne" defaultValue="Juan Esteban Gaete Stangl" className="inputDefectoA" /></td>
                        <td>Tipo de usuario :</td>
                        <td><Select
                            className="Cliente"
                            defaultValue="Cliente"
                            style={{
                                width: 150,
                                marginLeft: 20,
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
                        <td><Input placeholder="12345678-9" defaultValue="12.345.678-9" className="inputDefecto" /></td>
                    </tr>
                    <br />
                    <tr>
                        <td>Nombre usuario :</td>
                        <td><Input placeholder="BWAYNE" defaultValue="BWAYNE" className="inputDefecto" /></td>
                    </tr>
                    <br />
                    <tr>
                        <td>Empresa :</td>
                        <td><Input placeholder="Wayne Industries" defaultValue="Wayne Industries" className="inputDefecto"/></td>
                    </tr>
                    <br />
                    <tr>
                        <td>Email :</td>
                        <td><Input placeholder="bwayne@wayneind.com" defaultValue="bwayne@wayneind.com" className="inputDefecto"/></td>
                    </tr>
                    <br />
                    <tr>
                        <td>Contraseña :</td>
                        <td><Input.Password
                            style={{
                                width: '350px',
                                marginLeft: '20px' 
                            }}
                            placeholder="Genérica tipo B12345678W"
                            defaultValue="J123456789G"
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                        </td>
                    </tr>
                </table>

                <div className="buttonsA">
                    <MenuAccB />
                </div>
                <div className="homeA">
                    <HomeButtonAdmin />
                </div>
            </div>
        </div >
    )
}
