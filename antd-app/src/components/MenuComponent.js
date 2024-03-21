import React from 'react';
import { Menu } from 'antd';

const MenuComponent = () => {
    return (
        <Menu theme="dark" mode="horizontal" >
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.SubMenu key="2" title="Contacts">
                <Menu.Item key="3">MAIB: 123-456-789</Menu.Item>
                <Menu.Item key="4">MICB: 987-654-321</Menu.Item>
                <Menu.Item key="5">VictoriaBank: 555-123-456</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="6">About</Menu.Item>
        </Menu>
    );
};

export default MenuComponent;
