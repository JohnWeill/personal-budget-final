// budget API
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/mongodb_demo/personal_budget");

var nameSchema = new mongoose.Schema({
    firstName: String,
    lastNameName: String
  });

  var bodyParser = require('body-parser');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", (req, res) => {
    res.sendFile(__dirname + "/data.html");
  });

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
      .then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
  });