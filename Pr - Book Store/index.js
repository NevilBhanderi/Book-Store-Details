const express = require("express");
const port = 2211;

const app = express();
const db = require("./config/db");
const admin = require("./model/schema");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
    let data = await admin.find({});
       data && res.render("index", { data });
});

app.post("/addData", async (req, res) => {
    let data = await admin.create(req.body);
      data &&  res.redirect("/");
});

app.get("/deleteData" , async (req,res)=>{
    let data = await admin.findByIdAndDelete(req.query.id);
    data && res.redirect("/");
});

app.get("/editData", async (req, res) => {
    let data = await admin.findById(req.query.id);
    data && res.render("edit" , {data});
});

app.post("/updateData" , async(req,res) =>{
    let update = await admin.findByIdAndUpdate(req.body.id,req.body);
    update && res.redirect("/");
});


app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server started on port " + port);
});
