const controller = require("../controllers/map.controller");
const E_controller = require("../controllers/example.controller");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
        next();
    });

    app.get("/api/map/total", controller.totalMap);

    app.get("/api/map/mapInfo/:id", controller.mapInfo);
    //-----example
    app.get("/api/example", E_controller.getData);
    app.post("/api/example", E_controller.storeData);
    app.get("/api/example/:name", E_controller.getDataByName);
};
