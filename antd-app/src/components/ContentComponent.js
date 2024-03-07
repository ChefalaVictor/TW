import React from 'react';
import { Card } from 'antd';

const ContentComponent = ({ data }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {data.map((item, index) => (
                <Card key={item.id} style={{ width: 300, margin: '10px', backgroundColor: getColor(index) }} title={item.title}>
                    <div style={{ fontSize: '16px', color: '#333' }}>{item.content}</div>
                </Card>
            ))}
        </div>
    );
};

// Funcție pentru a obține culoarea în funcție de index
const getColor = (index) => {
    switch (index % 3) {
        case 0:
            return '#ff9999'; // Culoare pentru index 0, 3, 6, ...
        case 1:
            return '#99ff99'; // Culoare pentru index 1, 4, 7, ...
        case 2:
            return '#9999ff'; // Culoare pentru index 2, 5, 8, ...
        default:
            return '#ffffff'; // Alte cazuri
    }
};

export default ContentComponent;
