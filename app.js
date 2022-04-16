const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const getCurrentDay = require(__dirname+"/date.js");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine","ejs");


var items =["Work", "Play", "Gym"];
var workList = [];

app.listen(3000, ()=>{
    console.log(" Server listening on port 3000");
});

app.get("/", (req, res)=>{
day = getCurrentDay.getDay();
res.render("list", {listTitle:day, newListItem:items});
});

app.post("/", (req,res)=>{
    var item = req.body.newItem;
    console.log("here");
    console.log(req.body.submitted)
    if(req.body.submitted==="Work"){
        workList.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", (req,res)=>{
    res.render("list", {listTitle:"Work", newListItem:workList});
    // res.redirect("/");
});

app.post("/work", (req,res)=>{
    var item = req.body.newItem;
    workList.push(item);
    res.redirect("/");
});

app.get("/about", (req, res)=>{
    res.render("about");
});