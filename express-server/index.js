import express from "express"
// const express = require("express");
import bodyParser from "body-parser"
// const bodyParser = require("body-parser")
// import search from "../utils.js"

import fs from "fs";

const jsonParser = bodyParser.json()
const  urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express();
app.use(jsonParser);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.get("/", urlencodedParser, (request, response) => {
    const data = JSON.parse(fs.readFileSync("KITS_SHIPPING_DATA.json"))
    if (data){
        response.send(data);
    } else {
        response.send([])
    }
});

app.listen(5000, () => {
    console.log("Listening on port 5000...");
});