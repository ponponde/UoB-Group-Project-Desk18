import React from "react";
import { Drawer, List } from "antd";

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
                {props.title == "Gov Info" ? (
                    <li key={props.title}>
                        {props.data.code == "cn" ? (
                            //  <div onClick={window.open(props.url)}>
                            <a href={props.url} target="_blank">
                                疫情防控_中国政府网
                            </a>
                        ) : (
                            //  </div>
                            <img src={props.data}></img>
                        )}
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
