import React from "react";
import { Form, Input, Button, Modal } from "antd";
import * as fetch from "../../utils/fetch";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../store/action";
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
        fetch.signup(values).then((res) => {
            if (res.status === 200) {
                fetch.login(values).then((r) => {
                    dispatch(setUser(r.data));
                    close();
                });
            }
        });
    };

    const onFill = () => {
        form.setFieldsValue({
            username: "",
            email: "",
            password: "",
        });
    };

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
                        <Input.Password />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        {/* <Button htmlType="button" onClick={onReset}> */}
                        <Button data-testid="btnReset" htmlType="button" onClick={onFill}>
                            Reset
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default SignupModal;
