const mongoose = require("mongoose");

const User2 = mongoose.model(
    "User2",
    new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        points: Number,
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role",
            },
        ],
    })
);

module.exports = User2;
