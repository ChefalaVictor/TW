import React from 'react';
import { Menu } from 'antd';

const MenuComponent = () => {
    return (
        <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">Item 1</Menu.Item>
            <Menu.Item key="2">Item 2</Menu.Item>
            <Menu.Item key="3">Item 3</Menu.Item>
        </Menu>
    );
};

export default MenuComponent;
