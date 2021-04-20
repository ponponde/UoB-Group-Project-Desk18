const mongoose = require("mongoose");

const forum = mongoose.model(
   "forum",
   new mongoose.Schema({
      userId: Number,
      post: String,
   })
);

module.exports = forum;