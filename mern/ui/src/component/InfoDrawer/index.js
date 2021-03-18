import React, { useState } from "react";
import { Drawer, Button } from "antd";

const InfoDrawer = (props) => {
    const onClose = () => {
        props.onClose && props.onClose();
    };
    console.log(props.data);
    React.useEffect(()=>{
console.log(props.data);
    },[props])
    return (
        <>
            <Drawer
                title={props.title}
                placement={props.direction || "bottom"}
                closable={false}
                onClose={onClose}
                visible={props.visible}
            >
                <ul>
                {props.data&&Array.isArray(props.data)&&props.data.map((n)=>{
                   return( <li key={n.ID}>{n.Date}:{n.Note}</li>)
                })}
                {props.data&&!Array.isArray(props.data)&&Object.keys(props.data).map((n)=>{
                   return( <li key={n}>{n}: {props.data[n]}</li>)
                })}
                </ul>
                           
            </Drawer>
        </>
    );
};

export default InfoDrawer;
