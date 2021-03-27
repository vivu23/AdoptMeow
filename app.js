//jhint esversion:6
const { Pool } = require('pg');
const postgresql = new Pool({
  user: 'adoptmeuser',
  password: 'thuyvi2309',
  host: 'localhost',
  database: 'adoption_db',
  port: 5432
});

postgresql.connect();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//await pgsql.connect();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function(req,res){
  res.render('body');
});

app.get("/about", function(req,res){
  res.render('about');
});

app.get("/donate", function(req,res){
  res.render('donate')
});

app.get("/contact", function(req,res){
  res.render('contact');
});

app.post("/dog",function(req,res){
  res.render('dog');
});

app.post("/cat", function(req,res){
  res.render('cat');
});

let port = process.env.PORT;
if(port == null || port == ""){
  port = 2222;
}

app.listen(port, function(){
  console.log("Running");
});
