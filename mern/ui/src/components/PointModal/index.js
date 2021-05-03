import React, { useState } from "react";
import { Form, Input, Avatar, Modal, List } from "antd";
import { useDispatch } from "react-redux";
import * as mockData from "../../utils/mockData";
import "./style.scss";
const LoginModal = (props) => {
    //  const user = useSelector((state) => state.user);
    React.useEffect(() => {
        console.log(props.user);
    }, [props]);
    const { visible, close, user } = props;
    const data = [user];
    return (
        <>
            <Modal
                className="profolio"
                visible={visible}
                title="My Points"
                onCancel={() => {
                    close();
                }}
                footer={null}
            >
                <div className="photo">
                    <Avatar src={mockData.mockPhoto()} />
                </div>
                <List
                    itemLayout="vertical"
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta title={<a href="https://ant.design">Name: {item.username}</a>} />
                            <List.Item.Meta title={<a href="https://ant.design">Point: {item.points}</a>} />
                        </List.Item>
                    )}
                />
            </Modal>
        </>
    );
};

export default LoginModal;
