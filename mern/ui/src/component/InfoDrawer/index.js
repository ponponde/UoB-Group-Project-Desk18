import React, { useState } from "react";
import { Drawer, Button } from "antd";

const InfoDrawer = (props) => {
    const onClose = () => {
        props.onClose && props.onClose();
    };

    return (
        <>
            <Drawer
                title={props.title}
                placement={props.direction || "bottom"}
                closable={false}
                onClose={onClose}
                visible={props.visible}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                {props.data}
            </Drawer>
        </>
    );
};

export default InfoDrawer;
