const express = require("express");
const { pool } = require("./db");
const cors = require("cors");

const app = express();
const PORT = 8080;
app.use(cors());

//body data를 받아오기 위해서 필요하다.
//이게 빠지면 body 데이터를 받아올 수 없음.
app.use(express.json());
app.get("/api/menus", async (req, res)=>{
  console.log("GET /api/menus");
  const data = await pool.query("select * from menus");
  return res.json(data[0]);
});

app.post("/api/menus", async (req, res)=>{
  console.log("POST /api/menus");
  console.log(req.body);
  try{
    await pool.query(`INSERT INTO menus(menu_name, menu_description)
    VALUES (?, ?)`, [req.body.menu_name, req.body.menu_description]);
  } catch(error) {
    console.log(error);
    return res.json(error);
  }
  return res.json({
    status: "OK",
    method:"POST",
  })
});

app.listen(PORT, ()=>{`server opened on port ${PORT}`});