const mongoose = require("mongoose");
const DB_URI = "mongodb://mongo:27017/mongo-test";

function connect() {
    const Mockgoose = require('mockgoose').Mockgoose;
    const mockgoose = new Mockgoose(mongoose);

    if (process.env.NODE_ENV === 'test') {
        return mockgoose.prepareStorage()
          .then(() => {
              return mongoose.connect(DB_URI, {
                  useNewUrlParser: true,
                  useUnifiedTopology: true,
                  useFindAndModify: false,
                  useCreateIndex: true
              })
          })
    } else {
        return mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
    }
}

function close() {
    return mongoose.disconnect();
}

module.exports = { connect, close };
