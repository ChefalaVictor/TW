import React from 'react';
import { Card } from 'antd';

const ContentComponent = ({ data }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {data.map(item => (
                <Card key={item.id} style={{ width: 300, margin: '10px' }} title={item.title}>
                    {item.content}
                </Card>
            ))}
        </div>
    );
};

export default ContentComponent;
