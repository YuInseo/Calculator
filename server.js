//REQUIRES
const express = require("express");

//SETTINGS
const httpPort = 80;

//SETUP
const app = express()
app
    //SET STATIC PATH
    .use("/public", express.static(__dirname + "/public"))

    .get("/", (req, res) => {
        res.sendFile(__dirname + "/view/index.html");
    });

//STARTING SERVER
app.listen(httpPort, () => {
    console.log("HTTP Server Started! HTTP Listening On Port: " + httpPort)
})