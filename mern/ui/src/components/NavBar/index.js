import * as React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";
import { Link } from "react-router-dom";
import LoginModal from "../LoginModal";
import SideForum from "../SideForum";
import PointModal from "../PointModal";
import SignupModal from "../SignupModal";
import * as ep from "../../Endpoint";
import logo from "../../img/logo.png";
import logoTxt from "../../img/logoTxt.png";
import { logout } from "../../store/action";
import { formatName } from "../../utils/mockData";
import { setCurrentCountry } from "../../store/action";
const NavBar = (props) => {
    const [showLogin, setShowLogin] = React.useState(false);
    const [showSignup, setShowSignup] = React.useState(false);
    const [showForum, setShowForum] = React.useState(false);
    const [showPoint, setShowPoint] = React.useState(false);
    const [keyWord, setKeyword] = React.useState();
    const isLogin = useSelector((state) => state.isLogin);
    const currentCountry = useSelector((state) => state.currentCountry);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const handleLogout = () => {
        localStorage.clear(ep.SESSION_KEY);
        dispatch(logout());
    };
    const backToWorld = () => {
        dispatch(setCurrentCountry("Global"));
    };
    //  const showForum = useSelector((state) => state.showForum);

    return (
        <div className="navBar" data-testid="NavBar">
            <div
                className="groupLogo"
                onClick={() => {
                    backToWorld();
                }}
            >
                <img src={logo} alt="logo" style={{ width: "30px", height: "30px", marginRight: "10px" }} />
                <img src={logoTxt} alt="logoTxt" style={{ width: "150px", height: "20px" }} />
            </div>
            <div className="searchInput">
                <input
                    value={formatName(currentCountry)}
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
                {!isLogin ? (
                    <>
                        <div className="navBtn">
                            <Button onClick={() => setShowForum(true)}>Forum</Button>
                        </div>
                        <div className="navBtn">
                            <Button onClick={() => setShowSignup(true)}>Sign up</Button>
                        </div>
                        <div className="navBtn">
                            <Button onClick={() => setShowLogin(true)}>Login</Button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="navBtn"> Welcome back! {user?.username} </div>
                        <div className="navBtn">
                            <Button onClick={() => setShowForum(true)}>Forum</Button>
                        </div>
                        <div className="navBtn">
                            <Button onClick={() => setShowPoint(true)}>My points</Button>
                        </div>
                        <div className="navBtn">
                            <Button onClick={() => handleLogout()}>Log out</Button>
                        </div>
                    </>
                )}
                {showPoint ? <PointModal user={user} visible={showPoint} close={() => setShowPoint(false)} /> : null}
                {showLogin ? <LoginModal visible={showLogin} close={() => setShowLogin(false)} /> : null}
                {showSignup ? <SignupModal visible={showSignup} close={() => setShowSignup(false)} /> : null}
                {showForum ? <SideForum visible={showForum} close={() => setShowForum(false)} /> : null}
            </div>
        </div>
    );
};
// const mapDispatchToProps = {

// }
// NavBar = connect(null, mapDispatchToProps)(NavBar);

export default NavBar;
