const controller = require("../controllers/forum.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
        next();
    });

    app.post("/api/forum", controller.postData);
    app.get("/api/forum", controller.getData);
    app.get("/api/forum/:country", controller.getDataByCountry);
    app.get("/api/forum/user/:author_id", controller.getDataByMember);
}
