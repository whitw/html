const express = require("express");
const pool = require("./db");
const cors = require("cors");

const app = express();
const PORT = 8080;
app.use(cors());

app.get("/api/menus", (req, res)=>{
  console.log("GET /api/menus");
  return res.json({
    status:"OK",
    method: "GET",
  });
});

app.post("/api/menus", (req, res)=>{
  console.log("POST /api/menus");
  return res.json({
    status: "OK",
    method:"POST",
  })
});

app.listen(PORT, ()=>{`server opened on port ${PORT}`});