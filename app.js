const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine","ejs");


var items =["Work", "Play", "Gym"];

app.listen(3000, ()=>{
    console.log(" Server listening on port 3000");
});

app.get("/", (req, res)=>{
var today = new Date();
let currentDate = today.getDay();
var day;
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
day = today.toLocaleDateString("en-US", options);
res.render("list", {dayType:day, newListItem:items});
})

app.post("/", (req,res)=>{
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});


