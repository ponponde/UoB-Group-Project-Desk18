const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 8080;
const connection = "mongodb://mongo:27017/mongo-test";

app.use(cors());
// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
const conn = require("./db");
const Role = db.role;

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user",
            }).save((err) => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'user' to roles collection");
            });

            new Role({
                name: "admin",
            }).save((err) => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'admin' to roles collection");
            });
        }
    });
}

if (process.env.NODE_ENV !== 'test') {
    conn.connect()
      .then(() => {
          console.log("Successfully connect to MongoDB.");
          initial();
      })
      .catch((err) => {
          console.error("Connection error", err);
          process.exit();
      });
}

require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/map.routes")(app);
require("./routes/forum.route")(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

module.exports = { app };
