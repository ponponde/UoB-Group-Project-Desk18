import * as React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./style.scss";

const NavBar = (props) => {
    const { data } = props;
    const [keyWord, setKeyword] = React.useState();
    return (
        <div className="navBar">
            <div className="searchInput">
                <input
                    defaultValue={keyWord}
                    onChange={(e) => {
                        setKeyword(e.currentTarget.value);
                    }}
                />
                <div
                    className="searchBtn"
                    onClick={() => {
                        props.handleSearch && props.handleSearch();
                    }}
                >
                    <SearchOutlined />
                </div>
            </div>
            <div className="groupBtn">
                <div className="navBtn">
                    <Button type="primary">Sign up</Button>
                </div>
                <div className="navBtn">
                    <Button>Login</Button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
