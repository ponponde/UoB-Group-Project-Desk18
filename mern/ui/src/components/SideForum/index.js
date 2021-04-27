import React from "react";
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from "antd";

import { useSelector, useDispatch } from "react-redux";
import Post from "../Post";
import Editor from "../Editor";
const SideForum = (props) => {
    const currentCountry = useSelector((state) => state.currentCountry);
    React.useEffect(() => {
        console.log(currentCountry);
    }, [currentCountry]);

    return (
        <Drawer
            title={`You are in ${currentCountry}`}
            width={720}
            onClose={() => props.close && props.close()}
            visible={props.visible}
            bodyStyle={{ paddingBottom: 80 }}
            footer={<Editor />}
        >
            <Post />
        </Drawer>
    );
};

export default SideForum;
