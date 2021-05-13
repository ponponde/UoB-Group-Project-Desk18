const axios = require("axios");
const dd = require("../data/covid/0313.json");
const { getMockStatistics } = require("../mockData/statistic");
const { getRanklist } = require("../mockData/rankingList");
const accessToken = "5cf9dfd5-3449-485e-b5ae-70a60e997864";

exports.totalMap = (req, res) => {
    res.status(200).send(dd);
};

exports.mapInfo = async (req, res) => {
    const authAxios = axios.create({
        headers: {
            "X-Access-Token": accessToken,
        },
    });
    let dataObj = {};
    const getRandomNum = (max, min) => {
        if (!min) {
            min = 0;
            max--;
        }
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const id = req.params.id;
    if (id === "Global") {
        const summaryApi = `https://api.covid19api.com/summary`;
        const rowData = await authAxios.get(summaryApi).then((res) => {
            return res.data;
        });
        dataObj = {
            Country: id,
            CountryCode: id,
            Confirmed: rowData[id].TotalConfirmed,
            Deaths: rowData[id].TotalDeaths,
            Recovered: rowData[id].TotalRecovered,
            Active: "",
            Recommendation: "",
            Notes: "",
            NewConfirmed: rowData[id].NewConfirmed,
            statistics: getMockStatistics(),
            rankList: getRanklist().sort((a, b) => a.points < b.points),
            posts: getRandomNum(6000, 9000),
            feedback: getRandomNum(4000, 12000),
        };
    } else {
        const str1 = `https://api.covid19api.com/live/country/`;
        const urlString = str1.concat(req.params.id);
        const str2 = `https://api.covid19api.com/premium/travel/country/`;
        const urlString2 = str2.concat(req.params.id);

        let confirmedCases = 0;
        let deathsCases = 0;
        let recoveredCases = 0;
        let activeCases = 0;

        const resp2 = await authAxios.get(urlString2).then((res) => {
            return res.data;
        });
        const resp = await authAxios.get(urlString).then((res) => {
            return res.data;
        });

        for (var i = 0; i < resp.length; i++) {
            if (resp[i].Date == resp[resp.length - 1].Date) {
                confirmedCases += resp[i].Confirmed;
                deathsCases += resp[i].Deaths;
                recoveredCases += resp[i].Recovered;
                activeCases += resp[i].Active;
            }
        }
        var notesArray = [];

        for (var i = 0; i < resp2.Notes.length; i++) {
            var newObj = {
                Note: resp2.Notes[i].Note,
                Date: resp2.Notes[i].Date,
            };
            notesArray.push(newObj);
        }

        dataObj = {
            Country: resp[resp.length - 1].Country,
            CountryCode: resp[resp.length - 1].CountryCode,
            Confirmed: confirmedCases,
            Deaths: deathsCases,
            Recovered: recoveredCases,
            Active: activeCases,
            Recommendation: resp2.Recommendation,
            Notes: notesArray,
            statistics: getMockStatistics(),
            rankList: getRanklist(),
            posts: getRandomNum(6000, 9000),
            feedback: getRandomNum(4000, 12000),
        };
    }
    res.status(200).send(dataObj);
};
