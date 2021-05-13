import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
// import "./index.css";
import { Comment, Tooltip, List } from "antd";
import moment from "moment";
import * as mockData from "../../utils/mockData";
const data = [
    {
        actions: [<span key="comment-list-reply-to-0">Reply to</span>],
        author: mockData.getMockName(),
        avatar: mockData.mockPhoto(),
        content: (
            <p>
                We supply a series of design principles, practical patterns and high quality design resources (Sketch
                and Axure), to help people create their product prototypes beautifully and efficiently.
            </p>
        ),
        datetime: (
            <Tooltip title={moment().subtract(1, "days").format("YYYY-MM-DD HH:mm:ss")}>
                <span>{moment().subtract(1, "days").fromNow()}</span>
            </Tooltip>
        ),
    },
    {
        actions: [<span key="comment-list-reply-to-0">Reply to</span>],
        author: mockData.getMockName(),
        avatar: mockData.mockPhoto(),
        content: (
            <p>
                We supply a series of design principles, practical patterns and high quality design resources (Sketch
                and Axure), to help people create their product prototypes beautifully and efficiently.
            </p>
        ),
        datetime: (
            <Tooltip title={moment().subtract(2, "days").format("YYYY-MM-DD HH:mm:ss")}>
                <span>{moment().subtract(2, "days").fromNow()}</span>
            </Tooltip>
        ),
    },
];

const Reply = (props) => {
    return (
        <List
            className="comment-list"
            header={`${data.length} replies`}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
                <li>
                    <Comment
                        actions={item.actions}
                        author={item.author}
                        avatar={item.avatar}
                        content={item.content}
                        datetime={item.datetime}
                    />
                </li>
            )}
        />
    );
};

export default Reply;
