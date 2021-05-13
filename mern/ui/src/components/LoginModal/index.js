import React, { useState } from "react";
import { Form, Input, Button, Modal } from "antd";
import { setUser } from "../../store/action";
import { useSelector, useDispatch } from "react-redux";
import * as ep from "../../Endpoint";
import * as fetch from "../../utils/fetch";
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const LoginModal = (props) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const onFinish = (values) => {
        fetch
            .login(values)
            .then((r) => {
                if (r.status == 200) {
                    dispatch(setUser(r.data));
                    close();
                }
            })
            .catch((err) => {
                window.alert("Login failed, please try again");
            });
    };

    const onReset = () => {
        form.resetFields();
    };

    const onFill = () => {
        form.setFieldsValue({
            name: "",
            password: "",
        });
    };

    const { visible, close } = props;
    return (
        <>
            <Modal
                visible={visible}
                title="Log in"
                onCancel={() => {
                    close();
                }}
                footer={null}
            >
                <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                    <Form.Item
                        name="username"
                        label="name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        {/* <Button htmlType="button" onClick={onReset}> */}
                        <Button htmlType="button" onClick={onFill}>
                            Reset
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default LoginModal;
