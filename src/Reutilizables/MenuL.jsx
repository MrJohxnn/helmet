import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd'
import React from 'react'
import './estReu.css'
import 'antd/dist/antd.css'

const onClick = (e) => {
  console.log('click', e);
};

const App = () => (
  <Menu
    onClick={onClick}
    style={{
      width: 300,
    }}
    mode="vertical"
    items={items}
  />
);

export const MenuL = () => {
  return (
    <div className="contMenu">
    <Menu className="cuerpoMenu">
      <Menu.Item>accidentes</Menu.Item>
      <Menu.Item>reportes</Menu.Item>
      <Menu.SubMenu title="otros">
        <Menu.Item>paga</Menu.Item>
      </Menu.SubMenu>
    </Menu>
    </div>
  )
}
