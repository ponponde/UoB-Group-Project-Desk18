import React, { createElement, useState } from "react";
import { Alert, Comment, message,Avatar, Form, Button, List, Input } from "antd";
import moment from "moment";
import { useSelector, useDispatch, Provider } from "react-redux";

import { SmileOutlined } from "@ant-design/icons";
import * as fetch from "../../utils/fetch";
import { setPostData } from "../../store/action";
const { TextArea } = Input;

const Editor = () => {
   const icon = <SmileOutlined />;
   const currentCountry = useSelector((state) => state.currentCountry);
   const currentUser = useSelector((state) => state.user);
   const isLogin = useSelector((state) => state.isLogin);
   const [content, setContent] = React.useState("");
   const [showAlert, setShowAlert] = React.useState(false);
   const dispatch = useDispatch();
   React.useEffect(() => {
      setTimeout(() => {
         setShowAlert(false);
      }, 3000);
   }, [showAlert]);
   const addMyPoint = async () => {
      const data = {
         id: currentUser.id,
         point: 3,
      };
      const res = await fetch.addPoint(data);
   };
   const submitPost = async () => {
      if (!isLogin) {
         message.warning(`Please login first!`);
         return;
      }
      const myPost = {
         country: currentCountry,
         author: currentUser.username,
         author_id: currentUser.id,
         content: content,
      };
      let res = await fetch.sentPost(myPost);
      res = await fetch.getForumByCountry(currentCountry);
      addMyPoint();
      dispatch(setPostData(res));
      setContent("");
      setShowAlert(true);
   };

   return (
      <div
      style={{
         textAlign: "right",
      }}
      >
      {showAlert ? <Alert icon={icon} message="You got 3 point!" type="success" showIcon /> : null}
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
