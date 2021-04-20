const mongoose = require("mongoose");

const forum = mongoose.model(
   "forum",
   new mongoose.Schema({
      country: String,
      author: String,
      author_id: Number,
      content: String,
      date: Date,
   })
);

module.exports = forum;