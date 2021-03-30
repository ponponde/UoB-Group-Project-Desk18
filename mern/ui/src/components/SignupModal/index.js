import React, { useState } from "react";
import { Form, Input, Button, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";

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

const SignupModal = (props) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const onFinish = (values) => {
        console.log(values);
        fetch.signup(values, close);
        console.log("signup", values);
        //   axios.post(url.LOGIN_API, values).then(
        //       (response) => {
        //           console.log(response);
        //           //  localStorage.setItem("token", response.data.accessToken);
        //       },
        //       (error) => {
        //           console.log(error);
        //       }
        //   );

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
    //  function setToken(userToken) {
    //      sessionStorage.setItem("token", JSON.stringify(userToken));
    //  }
    //  const saveToken = (userToken) => {
    //      localStorage.setItem("token", JSON.stringify(userToken));
    //      setToken(userToken.token);
    //  };
    //  function getToken() {
    //      const tokenString = sessionStorage.getItem("token");
    //      const userToken = JSON.parse(tokenString);
    //      return userToken?.token;
    //  }
    const { visible, close } = props;
    return (
        <>
            <Modal
                visible={visible}
                title="Sign up"
                onCancel={() => {
                    close();
                }}
                footer={null}
            >
                <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                    <Form.Item
                        name="username"
                        label="Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
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
            </Modal>
        </>
    );
};

export default SignupModal;
