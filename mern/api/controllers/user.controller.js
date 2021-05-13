const db = require("../models");
const User = db.user;
exports.userPoint = async (req, res) => {
    console.log(req.body, 6666666666);
    const userId = req.body.id;
    const points = req.body.points;
    const filter = {
        _id: userId,
    };
    const updateDoc = {
        $set: {
            points: points,
        },
    };
    User.updateOne(filter, updateDoc).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.status(200).send(user);
        return;
    });

    User.updateOne(filter, updateDoc).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
    });
    User.findOne({
        _id: userId,
    }).exec((err, user) => {
        if (err || !user) {
            res.status(500).send({ message: err });
            return;
        }

        res.status(200).send({
            id: user._id,
            username: user.username,
            email: user.email,
            points: user.points,
            accessToken: req.body.token,
        });
    });
};
