const db = require("../models");
const forum_model = db.forum;

exports.postData = (req, res) => {
   const post = new forum_model({
      userId: req.body.userId,
      post: req.body.post,
      country: req.body.country,
      author: req.body.author,
      author_id: req.body.author_id,
      content: req.body.content,
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
   forum_model.findOne({
      CountryCode: req.body.CountryCode,
   })
   .exec((err,user) => {
      if (err) {
         res.status(500).send({ message: err });
         return;
      }
      res.status(200).send({
         userId: data.userId,
         post: data.post,
      });
   });
};