import React, { useState } from "react";
import Intro from "../../components/Intro";
import MusicPlayer from "../../components/MusicPlayer";
import InfoDrawer from "../../components/InfoDrawer";
import DynamicMsg from "../../components/DynamicMsg";
import World from "@svg-maps/world";
import * as ep from "../../Endpoint";
import * as fetch from "../../utils/fetch";
import { setUser, setCurrentCountryData } from "../../store/action";
import { SVGMap } from "react-svg-map";
import "./App.scss";
import "react-svg-map/lib/index.css";
import NavBar from "../../components/NavBar";
import { Button, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import StatisticPanel from "../../components/StatisticPanel";
import RankingList from "../../components/RankingList";
import { setCurrentCountry } from "../../store/action";
import { getRandomNum } from "../../utils/mockData";

function App(props) {
    const [position, setPosition] = React.useState({});
    const [isShow, setShow] = React.useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [drawerData, setDrawerData] = useState({});
    const currentCountry = useSelector((state) => state.currentCountry);
    const showForum = useSelector((state) => state.showForum);
    const isLogin = useSelector((state) => state.isLogin);
    const mainData = useSelector((state) => state.currentCountryData);
    const dispatch = useDispatch();
    React.useEffect(() => {
        getMapData();
    }, [props]);

    React.useEffect(() => {
        getMapData();
    }, [currentCountry]);

    async function getMapData() {
        const cData = await fetch.getMapInfo(currentCountry);
        dispatch(setCurrentCountryData(cData));
    }
    const tips = {
        gb: "https://www.torbayandsouthdevon.nhs.uk/uploads/200305-catch-it-bin-it-kill-it.jpg",
        tw: "https://www.seccm.org.tw/files/index_banner/20200323_002.jpg",
        cn: "http://www.gov.cn/fuwu/zt/yqfwzq/fkzn.htm",
    };

    async function retrieveUserData() {
        const TOKEN = localStorage.getItem(ep.SESSION_KEY);
        if (TOKEN) {
            const userdata = await fetch.getUserInfo();
            dispatch(setUser(userdata));
        }
    }
    React.useEffect(() => {
        retrieveUserData();
        getMapData();
    }, [props]);

    const showDrawer = (type) => {
        switch (type) {
            case "Gov":
                setDrawerData({
                    title: type + " Info",
                    data: {
                        code: currentCountry,
                        url: tips[currentCountry] || tips.GB,
                    },
                    derection: "bottom",
                });
                break;
            case "Travel":
                setDrawerData({
                    title: type + " Policy",
                    data: mainData.Notes,
                    derection: "bottom",
                });
                break;
            case "News":
                setDrawerData({
                    title: type,
                    data: mainData.Notes,
                    derection: "bottom",
                });
                break;
        }
        setOpenDrawer(true);
    };

    const setLocationID = (e) => {
        dispatch(setCurrentCountry(e.target.id));
        randomGetPoint();
        setShow(true);
    };
    const randomGetPoint = () => {
        if (getRandomNum(100) % 11 == 0) {
            const point = getRandomNum(1, 3);
            message.success(`You got ${point} points!`);
        }
    };
    const getScreenPosition = (e) => {
        const style = {
            left: e.screenX,
            top: e.screenY / 2,
        };
        setPosition(style);
        setShow(false);
    };
    const countryList = ["Active", "Confirmed", "Deaths", "Recovered"];
    function toCurrency(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <div className="App">
            {isLogin ? null : <Intro />}
            <MusicPlayer />

            <NavBar />
            <StatisticPanel
                data={mainData?.statistics}
                Confirmed={mainData?.Confirmed}
                Recovered={mainData?.Recovered}
                posts={mainData?.posts}
                feedback={mainData?.feedback}
            />
            <div className="rank_list">
                <RankingList data={mainData?.rankList} />
            </div>
            {showForum ? null : (
                <div className="dynamicMsg">
                    <DynamicMsg />
                </div>
            )}
            <div className="main_map">
                <SVGMap
                    map={World}
                    onLocationFocus={(e) => setLocationID(e)}
                    onLocationMouseMove={(e) => getScreenPosition(e)}
                />
            </div>

            {isShow ? (
                <div className="popup" style={position}>
                    {mainData?.Country}
                    <ul>
                        {mainData?.Active &&
                            countryList.map((txt) => {
                                return <li>{txt + ": " + toCurrency(mainData[txt])}</li>;
                            })}
                    </ul>
                </div>
            ) : null}

            <div className="footer">
                <Button type="primary" onClick={() => showDrawer("Gov")}>
                    Gov' info
                </Button>
                <Button type="primary" onClick={() => showDrawer("Travel")}>
                    Travel Policy
                </Button>
                <Button type="primary" onClick={() => showDrawer("News")}>
                    News
                </Button>
            </div>
            {openDrawer ? (
                <InfoDrawer
                    visible={openDrawer}
                    title={drawerData.title}
                    data={drawerData.data}
                    direction={drawerData.diriection}
                    onClose={() => {
                        setOpenDrawer(false);
                    }}
                />
            ) : null}
        </div>
    );
}

export default App;
