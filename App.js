const express = require('express');
const app = express();
app.use(express.json());       
app.use(express.urlencoded({extended: true})); 

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Index.html");
});
 
app.post("/", (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const pass = req.body.pass;
  const date = req.body.date;
  const pimage = req.body.pimage;
  const color = req.body.color;
  const agree = req.body.agree;
  const comment = req.body.comment;
  const sname = req.body.sname;
  const score = req.body.score;
  console.log("First Name: " + fname);
  console.log("Last Name: " + lname);
  console.log("Email: " + email);
  console.log("Password: " + pass);
  console.log("Date: " + date);
  console.log("Profile Image: " + pimage);
  console.log("Color: " + color);
  console.log("Agree: " + agree);
  console.log("Comment: " + comment);
  console.log("Name: " + sname);
  console.log("Score: " + score);
  res.send("Data received");
});
 
app.listen(3000);