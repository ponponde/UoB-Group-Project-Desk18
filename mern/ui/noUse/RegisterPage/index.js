import React from "react";
import { Form, Input, Button, Select } from "antd";
import history from "../../history";
import { useSelector, useDispatch } from "react-redux";

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
const RegisterPage = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    //  const updateRowData = (data) => {
    //      dispatch({
    //          type: UPDATE_ROWDATA,
    //          payload: data,
    //      });
    //  };
    const onFinish = (values) => {
        console.log(values);
        history.push("/");
        window.location.reload();

        //   axios.post(url.SIGNUP_API, values).then(
        //       (response) => {
        //           console.log(response);
        //           history.push("/");
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

    return (
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
    );
};
export default RegisterPage;
