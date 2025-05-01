const express = require("express");
const app = express();
const fs = require("fs");
const port = process.env.PORT || 8000;

app.use("/scripts", express.static("./public/scripts"));
app.use("/styles", express.static("./public/styles"));

app.get("/", (req, res) => {
    let homePage = fs.readFileSync("./app/html/index.html", "utf8");
    res.send(homePage);
});

app.listen(port, () => {
    console.log("Server is running on https://localhost:" + port);
});