import React, { useState } from "react";
import Intro from "../../components/Intro";
import MusicPlayer from "../../components/MusicPlayer";
import InfoDrawer from "../../components/InfoDrawer";
import World from "@svg-maps/world";
import * as ep from "../../Endpoint";
import * as fetch from "../../utils/fetch";
import { setCountryCode, setUser } from "../../store/action";
import { SVGMap } from "react-svg-map";
import "./App.scss";
import "react-svg-map/lib/index.css";
import NavBar from "../../components/NavBar";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import StatisticPanel from "../../components/StatisticPanel";
import RankingList from "../../components/RankingList";
import { setCurrentCountry } from "../../store/action";
const GB = require("../../data/travel/gb.json");
const dd = require("../../data/covid/0308.json");
const apiUrl = `http://localhost:8080`;

function App(props) {
    const [place, setPlace] = React.useState();
    const [position, setPosition] = React.useState({});
    const [isShow, setShow] = React.useState(false);
    const [globalData, setGlobalData] = React.useState({});
    const [countryData, setCountryData] = React.useState([]);
    const [countryRecord, setCountryRecord] = React.useState("");
    const [openDrawer, setOpenDrawer] = useState(false);
    const [drawerData, setDrawerData] = useState({});
    const currentCountry = useSelector((state) => state.currentCountry);
    const isLogin = useSelector((state) => state.isLogin);
    const dispatch = useDispatch();

    React.useEffect(() => {
        const gData = dd.Global;
        setGlobalData(gData);
        setCountryData(dd.Countries);
    }, []);
    async function retrieveUserData() {
        const TOKEN = localStorage.getItem(ep.SESSION_KEY);
        if (TOKEN) {
            const userdata = await fetch.getUserInfo();
            dispatch(setUser(userdata));
        }
    }
    React.useEffect(() => {
        retrieveUserData();
    }, [props]);
    const showDrawer = (type) => {
        switch (type) {
            case "Details":
                setDrawerData({
                    title: type,
                    data: GB.Country,
                    derection: "bottom",
                });
                break;
            case "Travel":
                setDrawerData({
                    title: type + " Policy",
                    data: GB.Notes,
                    derection: "bottom",
                });
                break;
            case "News":
                setDrawerData({
                    title: type,
                    data: [],
                    derection: "bottom",
                });
                break;
        }
        setOpenDrawer(true);
    };

    const setLocationID = (e) => {
        let d = countryData && countryData.filter((i) => i.CountryCode === e.target.id.toUpperCase());
        setCountryRecord(d[0]);
        //         Date: "2021-02-16T14:55:54.762Z"
        // ID: "c2d733a7-9e4b-48bb-b6c8-d2ce38761119"
        // NewConfirmed: 53883
        // NewDeaths: 989
        // NewRecovered: 0
        // Premium: {}
        // Slug: "united-states"
        // TotalConfirmed: 27694165
        // TotalDeaths: 486325

        dispatch(setCurrentCountry(e.target.id));
        setPlace(e.target.id);
        setShow(true);
    };
    const getScreenPosition = (e) => {
        const style = {
            left: e.screenX,
            top: e.screenY / 2,
        };
        setPosition(style);
        setShow(false);
    };
    const countryList = [
        "NewConfirmed",
        "NewDeaths",
        "NewRecovered",
        "TotalConfirmed",
        "TotalDeaths",
        "TotalRecovered",
    ];
    return (
        <div className="App">

            {isLogin ? null : <Intro />}
            <MusicPlayer/>

            <NavBar />
            <StatisticPanel data={countryRecord} />
            <div className="rank_list">
                <RankingList data={countryRecord} />
            </div>
            <div className="main_map">
                <SVGMap
                    map={World}
                    onLocationFocus={(e) => setLocationID(e)}
                    onLocationMouseMove={(e) => getScreenPosition(e)}
                />
            </div>

            {isShow ? (
                <div className="popup" style={position}>
                    {place.toUpperCase()}
                    <ul>
                        {countryList &&
                            countryRecord &&
                            countryList.map((txt) => {
                                return <li>{txt + ":" + countryRecord[txt]}</li>;
                            })}
                    </ul>
                </div>
            ) : null}

            <div className="footer">
                <Button type="primary" onClick={() => showDrawer("Details")}>
                    Details
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
