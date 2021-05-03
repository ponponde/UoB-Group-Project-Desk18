import React, { useState } from "react";
import { Drawer, Button, List } from "antd";

const InfoDrawer = (props) => {
    const onClose = () => {
        props.onClose && props.onClose();
    };
    //  console.log(props.data);
    React.useEffect(() => {
        console.log(props.data);
    }, [props]);
    return (
        <>
            <Drawer
                title={props.title}
                placement={props.direction || "bottom"}
                closable={false}
                onClose={onClose}
                visible={props.visible}
            >
                {props.title == "Gov Info" ? (
                    <li key={props.title}>
                        <img src={props.data}></img>
                    </li>
                ) : (
                    <List
                        itemLayout="horizontal"
                        dataSource={props.data}
                        renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                    title={
                                        <a href="https://ant.design">{item.Date.split("T")[0] + ": " + item.Note}</a>
                                    }
                                />
                            </List.Item>
                        )}
                    />
                )}
            </Drawer>
        </>
    );
};

export default InfoDrawer;
