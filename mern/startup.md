# How to build an API

## 1. Check the requirement

-   api endpoint
-   expected response object

## 2. Create the route

-   go to `/mern/api/routes/map.routes.js`

-   add an new route - for get
    `app.get("/api/map/total", controller.totalMap);` - for post
    ` app.post("<your route name>", controller.function)`
    The controller here means "/controllers/map.controller"

```
const controller = require("../controllers/map.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
        next();
    });

    app.get("/api/map/total", controller.totalMap);

    > put your new route here
};
```

## 3. Make the model(& DB)

Image that, a model is a table.

-   go to `mern/api/models` create a js file under this folder.
    e.g. `MODEL_NAME.model.js`
-   Define the MODEL (a kind of table in mongoDB)
    you just need to
    1. change MODEL_NAME into your model name
    2. Define the fields this table needs

```
const mongoose = require("mongoose");

const MODEL_NAME = mongoose.model(   // replace MODEL_NAME
    "MODEL_NAME",  // replace MODEL_NAME
    new mongoose.Schema({
        field2: String,  // edit here
        field3: Number,  // edit here
    })
);

module.exports = MODEL_NAME;   // replace MODEL_NAME
```

## 4. Regiter you model

-   to go `/mern/api/models/index.js`
-   find this part

```
db.user = require("./user2.model");
db.role = require("./role.model");
// register you model here-------

// register your model here
db.MODEL_NAME = require("./MODEL_NAME.model");

//------------------------------
```

After this step, you can use db.MODEL_NAME to interact with mongoDB.

## 5. Import the model that you created and make the function in controller

-   go to `/mern/api/controllers/map.controller.js`
-   add an new function in this format

```
exports.your_function_name = (req, res) => {
// 5-1 get data 

// 5-2 save data 

}
```

### 5-1 Get data from DB

-   findOne by consiton

```

Model.fineOne({condition}).exec((err,data)=>{
   if (err) {
      res.status(500).send({ message: err });
      return;
   }
   const obj={
      id: data.id,
      username: data.username,
      email: data.email,
   }
   res.status(200).send(obj);
})
```

e.g.

```
User.findOne({
username: req.body.username,
})
.exec((err, user) => {
if (err) {
res.status(500).send({ message: err });
return;
}
res.status(200).send({
id: user.\_id,
username: user.username,
email: user.email,
roles: authorities,
accessToken: token,
});

        })
```

-   findAll

```
Model.findAll({condition}).exec((err,data)=>{
   if (err) {
      res.status(500).send({ message: err });
      return;
   }
   res.status(200).send(data);
})
```

### 5-2 save data in DB
- create a new model instance
- model.save and response the frontend
```
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    });

    user.save((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.status(200).send(user);
    }
```

### check your API works successfully

- run `docker-compose up --build` in terminal
- open Postman
   - create a new request
   - set GET or POST
   - http://localhost:8080/<the api endpoint>
   - press down the Send button 
   - if you need to post data
      1. Choose Body
      2. select "row"
      3. select "JSON" via dropdown list
      4. Edit the data that you want to store
      ```
      {
         "username":"abc",
         "email":"abc@gmail.com",
         "password":"12345",
         "roles":["user"]
      }
      ```

If you get data successfully, congratulations! You complete you API!