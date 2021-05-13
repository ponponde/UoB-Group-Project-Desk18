const db = require("../models");
const forum_model = db.forum;
const getRandomNum = (max, min) => {
   if (!min) {
       min = 0;
       max--;
   }
   return Math.floor(Math.random() * (max - min + 1) + min);
};

const getMockLike = () => {
  return getRandomNum(2000);
};

exports.postData = (req, res) => {
   const post = new forum_model({
      userId: req.body.userId,
      country: req.body.country,
      author: req.body.author,
      author_id: req.body.author_id,
      content: req.body.content,
      likes:getMockLike(),
      date: new Date(),
   });

   post.save((err, data) => {
      if (err) {
         res.status(500).send({ message: err });
         return;
      }
      res.status(200).send(data);
   });
};

exports.getData = (req, res) => {
   forum_model.find().exec((err, data) => {
      if (err) {
         res.status(500).send({ message: err });
         return;
      }
      res.status(200).send(data);
   });
};

exports.getDataByCountry = (req,res) => {
   forum_model.find({
      country: req.params.country,
   }, '-_id userId country author content date').sort( { date: -1 } )
   .exec((err,data) => {
      if (err) {
         res.status(500).send({ message: err });
         return;
      }
      res.status(200).send(data);
   });
};

exports.getDataByMember = (req,res) => {
   forum_model.find({
      author_id: req.params.author_id,
   }, '-_id userId country author content date')
   .exec((err,data) => {
      if (err) {
         res.status(500).send({ message: err });
         return;
      }
      res.status(200).send(data);
   });
}