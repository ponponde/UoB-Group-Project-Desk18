const db = require("../models");
const User = db.user;
exports.userPoint = async (req, res) => {
    const userId = req.body.id;
    const points = req.body.points;
    const filter = {
        _id: userId,
    };
    User.findOne(filter).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        let newPoints = user.points + points;
        const updateDoc = {
            $set: {
                points: newPoints,
            },
        };
        User.updateOne(filter, updateDoc).exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            res.status(200).send({ id: userId, points: newPoints });
            return;
        });
    });
};
