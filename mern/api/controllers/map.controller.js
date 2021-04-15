const dd = require("../data/covid/0313.json");
exports.totalMap = (req, res) => {
    res.status(200).send(dd);
};
