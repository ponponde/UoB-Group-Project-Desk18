import React, { createElement, useState } from "react";
import { Comment, Avatar, Form, Button, List, Input } from "antd";
import moment from "moment";

const { TextArea } = Input;

const Editor = (props) => {
    const { onChange, onSubmit, submitting, value } = props;
    return (
        <div
            style={{
                textAlign: "right",
            }}
        >
            <Form.Item>
                <TextArea rows={4} onChange={onChange} value={value} />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                    New Post
                </Button>
            </Form.Item>
        </div>
    );
};
export default Editor;
