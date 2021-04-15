const db = require("../models");
const Example_model = db.example;
exports.getDataByName = (req, res) => {
    const name = req.params.name;
    Example_model.findOne({
        name: name,
    }).exec((err, data) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.status(200).send({
            id: data._id,
            name: data.name,
            age: data.age,
            isStudent: data.isStudent,
        });
    });
};

exports.storeData = (req, res) => {
    const example = new Example_model({
        name: req.body.name,
        age: req.body.age,
        isStudent: req.body.isStudent,
    });

    example.save((err, data) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.status(200).send(data);
    });
};

exports.getData = (req, res) => {
    Example_model.find().exec((err, data) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.status(200).send(data);
    });
};
