import React from 'react';
import { Form, Input, Button } from 'antd';

const FormComponent = () => {
    const onFinish = values => {
        console.log('Form submitted:', values);
        alert('Form submitted successfully!');
    };

    return (
        <Form onFinish={onFinish} style={{ maxWidth: 300 }}>
            <Form.Item name="input1">
                <Input placeholder="Input 1" />
            </Form.Item>
            <Form.Item name="input2">
                <Input placeholder="Input 2" />
            </Form.Item>
            <Form.Item name="input3">
                <Input placeholder="Input 3" />
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