import React from "react";
import { Form, Input, Button, Select } from "antd";
import * as url from "../../Endpoint";
import axios from "axios";
const { Option } = Select;
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
const LoginPage = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
        axios.post(url.LOGIN_API, values).then(
            (response) => {
                console.log(response);
            },
            (error) => {
                console.log(error);
            }
        );

        //    {
        //       "username":"abc",
        //       "email":"abc@gmail.com",
        //       "password":"12345",
        //       "roles":["user"]
        //   }
    };

    const onReset = () => {
        form.resetFields();
    };

    const onFill = () => {
        form.setFieldsValue({
            username: "abc",
            email: "abc@gmail.com",
            password: "12345",
        });
    };

    return (
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
            <Form.Item
                name="email"
                label="Email"
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
                <Input />
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
    );
};
export default LoginPage;
