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
    // console.log("into one");
    //  const resp3 = await authAxios.get("https://api.covid19api.com/summary").then((res) => {
    //    //   console.log("resp3", res.data.Global);
    //      return res;
    //  });
    // console.log("url2", urlString2);

    const resp2 = await authAxios.get(urlString2).then((res) => {
        //   console.log("resp2", res.data);
        return res.data;
    });
    // console.log("url", urlString);
    const resp = await authAxios.get(urlString).then((res) => {
        //   console.log("resp", res.data);
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

     const dataObj = {
         Country: resp[resp.length - 1].Country,
         CountryCode: resp[resp.length - 1].CountryCode,
         Confirmed: confirmedCases,
         Deaths: deathsCases,
         Recovered: recoveredCases,
         Active: activeCases,
         Recommendation: resp2.Recommendation,
         Notes: notesArray,
     };

    res.status(200).send(dataObj);
};
