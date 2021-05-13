import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
// import "./index.css";
import { List, Avatar, Button, Skeleton } from "antd";
import * as mockData from "../../utils/mockData";

const RankingList = () => {
    const data = [
        {
            msg: mockData.getMockText(),
        },
        {
            msg: mockData.getMockText(),
        },
        {
            msg: mockData.getMockText(),
        },
    ];
    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={mockData.mockPhoto()} />}
                        title={<a href="https://ant.design">{mockData.getMockName() + ": " + item.msg}</a>}
                    />
                </List.Item>
            )}
        />
    );
};

export default RankingList;
