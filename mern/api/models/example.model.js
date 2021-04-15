const mongoose = require("mongoose");

const Example = mongoose.model(
    "Example",
    new mongoose.Schema({
        name: String,
        age: Number,
        isStudent: Boolean,
    })
);

module.exports = Example;