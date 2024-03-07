import React from 'react';
import { Form, Input, Button } from 'antd';

const FormComponent = () => {
    const onFinish = values => {
        console.log('Form submitted:', values); // Afisare in consola
        alert('Form submitted successfully!'); // Afișare alertă
    };

    return (

        <Form onFinish={onFinish} style={{ maxWidth: 300 }}>
            <Form.Item name="Card Holder">
                <Input placeholder="Card Holder" />
            </Form.Item>
            <Form.Item name="Name of bank">
                <Input placeholder="Name of bank" />
            </Form.Item>
            <Form.Item name="Number of card">
                <Input placeholder="Number of card" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default FormComponent;
