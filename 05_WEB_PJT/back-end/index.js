const express = require("express");
const app = express();

const PORT = 8081;

const cors = require("cors");
const morgan = require("morgan");

const fs = require("fs");

const api = require("./api");

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res)=>{
  return res.json({test: "Hello World!"});
});

//파일을 읽어서 리턴
app.get("/api/data", (req, res) => {
  try{
    fs.readFile(
      "./uploads/chart.json",
      "utf8",
      (error, data)=>{
        if(error){
          console.log(error);
        }
        else{
          res.json(JSON.parse(data));
        }
      })
  } catch(error){
    console.log(error);
    return res.json(error);
  }
})

//요청을 보내고 값을 파일로 저장하는 역할.
//캐싱 역할 포함.
app.post("/api/data", async (req, res) => {
  //어쩌면 여기서 req.body 형태를 검사할 수도.
  console.log(req.body);
  try{
    const result = await api.post(req.body);
    fs.writeFile(
      "./uploads/chart.json",
      JSON.stringify(result.data.results),
      function(err){
        console.log(err);
    });
    res.json(result.data.results);

  } catch(error){
    console.log(error);
    return res.json(error);
  }
})

//파일 삭제
app.delete("/api/data", (req, res) => {
  
})

app.listen(PORT, ()=>{console.log(`App started at port ${PORT}`)});