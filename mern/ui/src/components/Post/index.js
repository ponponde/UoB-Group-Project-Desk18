import React, { createElement, useState } from "react";
import { Comment, Tooltip, Avatar, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from "@ant-design/icons";
import Reply from "../Reply";
import { Form, Button, List, Input } from "antd";
import * as mockData from "../../utils/mockData";
const { TextArea } = Input;
const Post = (props) => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);
    const post_data = useSelector((state) => state.post_data);
    const isLogin = useSelector((state) => state.isLogin);
    const like = () => {
        if (!isLogin) {
            message.warning(`Please login first!`);
            return;
        }
        setLikes(1);
        message.success(`You got ${1} points!`);
        setDislikes(0);
        setAction("liked");
    };

    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
            <span onClick={like}>
                {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
                <span className="comment-action">{mockData.getMockLike()}</span>
            </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Reply to</span>,
    ];
    const posts = (data) => {
        const arr = [];
        data &&
            data.forEach((p, i) => {
                arr.push(
                    <Comment
                        actions={actions}
                        author={<a>{p?.author}</a>}
                        avatar={<Avatar src={mockData.mockPhoto()} alt={p?.author} />}
                        content={<p>{p?.content}</p>}
                        datetime={
                            <Tooltip title={moment(p?.date).format("YYYY-MM-DD HH:mm:ss")}>
                                <span>{moment().fromNow()}</span>
                            </Tooltip>
                        }
                    />
                );
            });
        return arr;
    };

    return (
        <>
            {posts(post_data)}
            <Comment
                actions={actions}
                author={<a>{mockData.getMockName()}</a>}
                avatar={<Avatar src={mockData.mockPhoto()} alt={mockData.getMockName()} />}
                content={
                    <p>
                        We supply a series of design principles, practical patterns and high quality design resources
                        (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.
                    </p>
                }
                datetime={
                    <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                        <span>{moment().fromNow()}</span>
                    </Tooltip>
                }
            >
                <Reply />
            </Comment>
        </>
    );
};

export default Post;
