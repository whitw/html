const express = require("express");
const app = express();
const PORT = 8080;
const cors = require('cors');

app.use(cors());
app.get("/api/info", (req, res)=>{
  console.log("GET /api/info");
  return res.json({
    name: "김상현",
    job: "Student",

  });
});

app.listen(PORT, ()=> console.log(`the server had openned on port ${PORT}`));
