const express = require("express");
const app = express();
const PORT = 8080;

const cors = require("cors");
app.use(cors());

const { pool } = require("./db");

app.get("/api/menus", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM menus");
    if (data[0]) {
      return res.json(data[0]);
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`this server is listening on ${PORT}`));
