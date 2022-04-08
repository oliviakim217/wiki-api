const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true})); 
app.use(express.static("public"));


// DB
mongoose.connect("mongodb://localhost:27017/wikiDB");

const wikiDBSchema = new mongoose.Schema ({
    title: String,
    content: String
});

const Article = mongoose.model("Article", wikiDBSchema);


app.listen(3000, function() {
    console.log("Server started on port 3000.")
});