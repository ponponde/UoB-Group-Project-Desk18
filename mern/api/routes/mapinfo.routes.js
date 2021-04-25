
const router = require('express').Router();
const dd = require("../data/covid/0308.json");
const axios = require('axios');


const accessToken = '5cf9dfd5-3449-485e-b5ae-70a60e997864';
const authAxios = axios.create({
  headers: {
    "X-Access-Token": accessToken
  }
});


router.route('/:id').get((req, res) => {
var str1 = "https://api.covid19api.com/live/country/";
var urlString = str1.concat(req.params.id);
var dataObj;

authAxios.get(urlString)
.then(resp => {


  var confirmedCases = 0;
  var deathsCases = 0;
  var recoveredCases = 0;
  var activeCases = 0;

    for (var i=0 ; i < resp.data.length ; i++){
      if (resp.data[i].Date == resp.data[resp.data.length - 1].Date) {
          confirmedCases += resp.data[i].Confirmed;
          deathsCases += resp.data[i].Deaths;
          recoveredCases += resp.data[i].Recovered;
          activeCases += resp.data[i].Active;
      }
  }

var str2 = "https://api.covid19api.com/premium/travel/country/";
var urlString2 = str2.concat(req.params.id);
authAxios.get(urlString2)
.then(resp2 => {

var notesArray = [];

for (var i = 0; i < resp2.data.Notes.length; i++) {
  var newObj = {
    "Note": resp2.data.Notes[i].Note,
    "Date": resp2.data.Notes[i].Date
  }
  notesArray.push(newObj);
}

  var dataObj = {
    "Country": resp.data[resp.data.length - 1].Country,
    "CountryCode": resp.data[resp.data.length - 1].CountryCode,
    "Confirmed": confirmedCases,
    "Deaths": deathsCases,
    "Recovered": recoveredCases,
    "Active": activeCases,
    "Recommendation": resp2.data.Recommendation,
    "Notes": notesArray
  }
  console.log(dataObj);
    res.status(200).send(dataObj);

}).catch(error => {
res.status(400).send(error.response.data.message);
});


})
.catch(error => {
res.status(400).send(error.response.data.message);
});


})

module.exports = router;
