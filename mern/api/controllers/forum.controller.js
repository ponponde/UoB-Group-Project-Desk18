const db = require("../models");
const forum_model = db.forum;

exports.postData = (req, res) => {
   const post = new forum_model({
      userId: req.body.userId,
      post: req.body.post,
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