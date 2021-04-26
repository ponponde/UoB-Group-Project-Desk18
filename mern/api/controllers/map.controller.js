const axios = require("axios");
const dd = require("../data/covid/0313.json");
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
    const id = req.params.id;
    const str1 = `https://api.covid19api.com/live/country/`;
    const urlString = str1.concat(req.params.id);
    const str2 = `https://api.covid19api.com/premium/travel/country/`;
    const urlString2 = str2.concat(req.params.id);
    let confirmedCases = 0;
    let deathsCases = 0;
    let recoveredCases = 0;
    let activeCases = 0;
    console.log("into one");
    //  const resp3 = await authAxios.get("https://api.covid19api.com/summary").then((res) => {
    //    //   console.log("resp3", res.data.Global);
    //      return res;
    //  });
    console.log("url2", urlString2);
    const resp2 = await authAxios.get(urlString2).then((res) => {
        //   console.log("resp2", res.data);
        return res.data;
    });
    console.log("url", urlString);
    const resp = await authAxios.get(urlString).then((res) => {
        //   console.log("resp", res.data);
        return res.data;
    });
    //  for (var i = 0; i < resp.data.length; i++) {
    //      if (resp.data[i].Date == resp.data[resp.data.length - 1].Date) {
    //          confirmedCases += resp.data[i].Confirmed;
    //          deathsCases += resp.data[i].Deaths;
    //          recoveredCases += resp.data[i].Recovered;
    //          activeCases += resp.data[i].Active;
    //      }
    //  }
    //  var notesArray = [];

    //  for (var i = 0; i < resp2.data.Notes.length; i++) {
    //      var newObj = {
    //          Note: resp2.data.Notes[i].Note,
    //          Date: resp2.data.Notes[i].Date,
    //      };
    //      notesArray.push(newObj);
    //  }

    //  var dataObj = {
    //      Country: resp.data[resp.data.length - 1].Country,
    //      CountryCode: resp.data[resp.data.length - 1].CountryCode,
    //      Confirmed: confirmedCases,
    //      Deaths: deathsCases,
    //      Recovered: recoveredCases,
    //      Active: activeCases,
    //      Recommendation: resp2.data.Recommendation,
    //      Notes: notesArray,
    //  };
    //  console.log(dataObj);
    const data = {
        resp2,
        resp,
    };
    res.status(200).send(data);
};
