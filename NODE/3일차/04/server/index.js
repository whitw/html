const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { pool } = require("./db");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get("/test/", async (req, res) => {
  try{
    console.log(req.query);
    return res.json({});
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

app.post("/test/:id", async (req, res) => {
  try{
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
    return res.json({});
  } catch(error){
    console.log(error);
    res.json(error);
  }
});

app.get("/api/menus", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM menus");
    if (data[0]) {
      return res.json(data[0]);
    }
    else{
      console.log(data);
      return res.json({});
    }
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

app.get("/api/menus/:id", async (req, res) => {
  try {
    const data = await pool.query(
      `
        SELECT * FROM menus 
        WHERE menu_id=${req.params.id}
      `
    );
    if (data[0][0]) {
      return res.json(data[0][0]);
    }
    else{
      return res.json({});
    }
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

app.post("/api/menus", async (req, res) => {
  try {
    const data = await pool.query(
      `
        INSERT INTO menus 
        (menu_name, menu_description, menu_img_link) 
        VALUES 
        ("${req.body.menu_name}", "${req.body.menu_description}", "${req.body.menu_img_link}")
      `
    );
    if (data[0]) {
      return res.json(data[0]);
    }
    else{
      return res.json({});
    }
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

app.patch("/api/menus/:id", async (req, res) => {
  try {
    const data = await pool.query(
      `
        UPDATE menus 
        SET menu_name="${req.body.menu_name}", menu_description="${req.body.menu_description}", menu_img_link="${req.body.menu_img_link}"
        WHERE menu_id=${req.params.id}
      `
    );
    if (data[0]) {
      return res.json(data[0]);
    }
    else{
      return res.json({});
    }
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

app.delete("/api/menus/:id", async (req, res) => {
  try {
    const data = await pool.query(
      `
        DELETE FROM menus WHERE menu_id=${req.params.id}
      `
    );
    if (data[0]) {
      return res.json(data[0]);
    }
    else{
      return res.json({});
    }
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

app.listen(PORT, () => console.log(`this server is listening on ${PORT}`));
