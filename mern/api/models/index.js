const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user2.model");
db.role = require("./role.model");
// register you model here-------
db.example = require("./example.model");
db.forum = require("./forum.model");
//------------------------------
db.ROLES = ["user", "admin"];

module.exports = db;
