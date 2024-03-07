import React from 'react';
import { Menu } from 'antd';

const MenuComponent = () => {
    return (
        <Menu theme="dark" mode="horizontal" >
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Contacts</Menu.Item>
            <Menu.Item key="3">About</Menu.Item>
        </Menu>
    );
};

export default MenuComponent;
