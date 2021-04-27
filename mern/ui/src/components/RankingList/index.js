import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
// import "./index.css";
import { List, Avatar, Button, Skeleton } from "antd";
import * as mockData from "../../utils/mockData";

const RankingList = () => {
    const data = [
        {
            title: mockData.getRandomNum(12000, 9000),
        },
        {
            title: mockData.getRandomNum(9000, 7000),
        },
        {
            title: mockData.getRandomNum(7000, 6000),
        },
        {
            title: mockData.getRandomNum(6000, 5000),
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
                        title={<a href="https://ant.design">{mockData.getMockName() + ": " + item.title}</a>}
                    />
                </List.Item>
            )}
        />
    );
};

export default RankingList;
