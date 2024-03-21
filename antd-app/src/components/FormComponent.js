import React, { useState } from 'react';
import { Form, Input, Button, Modal } from 'antd';

const FormComponent = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const onFinish = values => {
        console.log('Form submitted:', values); // Afișare în consolă
        setIsModalVisible(true); // Afisare caseta de dialog
    };

    const handleModalOk = () => {
        console.log('User confirmed action');
        setIsModalVisible(false); // Inchidere caseta de dialog
        // Aici puteți executa alte acțiuni după ce utilizatorul a confirmat
        alert('Form submitted successfully!'); // Afișare alertă
    };

    const handleModalCancel = () => {
        console.log('User canceled action');
        setIsModalVisible(false); // Inchidere caseta de dialog
        // Aici puteți executa alte acțiuni după ce utilizatorul a anulat
    };

    return (
        <div>
            <Form onFinish={onFinish} style={{ maxWidth: 300 }}>
                <Form.Item
                    name="CardHolder"
                    rules={[
                        {
                            required: true,
                            message: 'Please input card holder information!',
                        },
                        {
                            pattern: /^[A-Z\s]+$/,
                            message: 'Please input only uppercase letters and spaces!',
                        },
                    ]}
                >
                    <Input placeholder="Card Holder" />
                </Form.Item>
                <Form.Item
                    name="CardNumber"
                    rules={[
                        {
                            required: true,
                            message: 'Please input card number!',
                        },
                        {
                            pattern: /^[0-9]+$/,
                            message: 'Please input only numbers!',
                        },
                        {
                            len: 16,
                            message: 'Please input exactly 16 digits for card number!',
                        },
                    ]}
                >
                    <Input placeholder="Card Number (16 digits)" />
                </Form.Item>
                <Form.Item
                    name="ExpirationDate"
                    rules={[
                        {
                            required: true,
                            message: 'Please input expiration date!',
                        },
                        {
                            pattern: /^[0-9/]+$/,
                            message: 'Please input only numbers and /!',
                        },
                        {
                            len: 5,
                            message: 'Please input exactly 5 characters for expiration date (MM/YY)!',
                        },
                    ]}
                >
                    <Input placeholder="Expiration Date (MM/YY)" />
                </Form.Item>
                <Form.Item
                    name="PIN"
                    rules={[
                        {
                            required: true,
                            message: 'Please input PIN!',
                        },
                        {
                            pattern: /^[0-9]+$/,
                            message: 'Please input only numbers!',
                        },
                        {
                            len: 4,
                            message: 'Please input exactly 4 digits for PIN!',
                        },
                    ]}
                >
                    <Input.Password placeholder="PIN (4 digits)" />
                </Form.Item>
                <Form.Item
                    name="CVV"
                    rules={[
                        {
                            required: true,
                            message: 'Please input CVV!',
                        },
                        {
                            pattern: /^[0-9]+$/,
                            message: 'Please input only numbers!',
                        },
                        {
                            len: 3,
                            message: 'Please input exactly 3 digits for CVV!',
                        },
                    ]}
                >
                    <Input.Password placeholder="CVV (3 digits)" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <Modal
                title="Confirmation"
                visible={isModalVisible}
                onOk={handleModalOk}
                onCancel={handleModalCancel}
                okText="Yes"
                cancelText="No"
            >
                <p>Are you sure you want to submit the form?</p>
            </Modal>
        </div>
    );
};

export default FormComponent;
