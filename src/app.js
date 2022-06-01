let express = require("express");
const path = require("path");
let app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/public", express.static(path.join(__dirname, "../public")));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(3000, function () {
    console.log("Server started on port http://localhost:3000");
});
