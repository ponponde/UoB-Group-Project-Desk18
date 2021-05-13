import React from "react";
import "antd/dist/antd.css";
import { List, Avatar } from "antd";

const RankingList = (props) => {
    const { data } = props;
    return (
        <List data-testid="RankingList"
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={item.photo} />}
                        title={<a href="https://ant.design">{item.name + ": " + item.points}</a>}
                    />
                </List.Item>
            )}
        />
    );
};

export default RankingList;
