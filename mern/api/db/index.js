const mongoose = require("mongoose");
const DB_URI = "mongodb://mongo:27017/mongo-test";

function connect() {
    return new Promise((resolve, reject) => {
        const Mockgoose = require("mockgoose").Mockgoose;
        const mockgoose = new Mockgoose(mongoose);

        mockgoose.prepareStorage().then(() => {
            mongoose.connect(DB_URI, { useNewUrlParser: true, useCreateIndex: true }).then((res, err) => {
                if (err) return reject(err);
                resolve();
            });
        });
    });
}

function close() {
    return mongoose.disconnect();
}

module.exports = { connect, close };
