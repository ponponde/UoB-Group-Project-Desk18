import * as React from "react";
import { SearchOutlined } from "@ant-design/icons";
import "./style.scss";

const NavBar = (props) => {
    const { data } = props;
    const [keyWord, setKeyword] = React.useState();
    return (
        <div className="searchBar">
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
        </div>
    );
};

export default NavBar;
