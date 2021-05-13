import React, { createElement, useState } from "react";
import { Comment, Avatar, Form, Button, List, Input } from "antd";
import moment from "moment";
import { useSelector, useDispatch, Provider } from "react-redux";

import * as fetch from "../../utils/fetch";
import { setPostData } from "../../store/action";
const { TextArea } = Input;

const Editor = () => {
    const currentCountry = useSelector((state) => state.currentCountry);
    const currentUser = useSelector((state) => state.user);
    const [content, setContent] = React.useState("");
    const dispatch = useDispatch();
    const submitPost = async () => {
        const myPost = {
            country: currentCountry,
            author: currentUser.username,
            author_id: currentUser.id,
            content: content,
        };
        let res = await fetch.sentPost(myPost);
        res = await fetch.getForumByCountry(currentCountry);
        dispatch(setPostData(res));
        setContent("");
    };
    return (
        
            <div
                style={{
                    textAlign: "right",
                }}
            >
                <Form.Item>
                    <TextArea
                        rows={4}
                        onChange={(e) => {
                            setContent(e.target.value);
                        }}
                        value={content}
                    />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" onClick={submitPost} type="primary">
                        New Post
                    </Button>
                </Form.Item>
            </div> 
    
        
    );
};
export default Editor;
