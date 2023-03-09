const express = require("express");
const app = express();
const PORT = 8080;

const cors = require("cors");
app.use(cors());

const { pool } = require("./db");
//디렉토리를 지정했을 때 기본값은 무조건 index.js인가봄.

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
