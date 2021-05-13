import React from "react";
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from "antd";

import { useSelector, useDispatch } from "react-redux";
import Post from "../Post";
import Editor from "../Editor";
import * as ep from "../../Endpoint";
import * as fetch from "../../utils/fetch";
import { setPostData } from "../../store/action";
import { formatName } from "../../utils/mockData";

const SideForum = (props) => {
    const currentCountry = useSelector((state) => state.currentCountry);
    const dispatch = useDispatch();
    React.useEffect(() => {
        getData();
    }, [currentCountry]);

    const getData = async () => {
        const res = await fetch.getForumByCountry(currentCountry);
        dispatch(setPostData(res));
    };

    return (
        <Drawer
            title={`You are in ${formatName(currentCountry)}`}
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
