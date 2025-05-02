const express = require("express");
const app = express();
const fs = require("fs");
const port = process.env.PORT || 8000;

app.use("/scripts", express.static("./public/scripts"));
app.use("/styles", express.static("./public/styles"));

app.get("/sds", (req, res) => {
    let sdsPage = fs.readFileSync("./app/html/sds.html", "utf8");
    res.send(sdsPage);
});

app.use(function (req, res) {
    res.status(404);
    res.send("Page not found - 404");
});

app.listen(port, () => {
    console.log("Server is running on https://localhost:" + port);
});