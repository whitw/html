const fs = require('fs');

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const logger = require('./utils/log');
const { json } = require('express');
const PORT = 8080;
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(__dirname + "/views"));


app.get("/api/logs", (req, res)=>{
  logger.error("error 메시지");
  logger.warn("warn 메시지");
  logger.info("info 메시지");
  logger.http("http 메시지");
  logger.debug("debug 메시지");
  const time = new Date();
  const year = time.getFullYear();
  const month = (time.getMonth() + 1 < 10? '0' + String(time.getMonth() + 1) : time.getMonth() + 1);
  const day = (time.getDate() + 1 < 10? '0' + String(time.getDate()) : time.getDate());
  const hour = (time.getHours() + 1 < 10? '0' + String(time.getHours()) : time.getHours());;
  const logFileName = `./logs/${year}-${month}-${day}-${hour}.log`;
  console.log(logFileName);
  fs.readFile(logFileName, "utf-8", (err, data)=>{
    const datalines = data.split('\r\n').slice(0, -1);
    const datajson = datalines.map((data)=>JSON.parse(data));
    res.json(datajson);
  })
});

app.listen(PORT, ()=>console.log(`${PORT} 서버 기동중`));