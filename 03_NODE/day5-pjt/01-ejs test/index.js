const express = require("express");
const morgan = require('morgan');
const axios = require('axios');
const app = express();
const PORT = 8080;
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.set('views', './views')

app.get('/', (req, res)=>{
  res.render('index', {name:"asdf"});
});
app.get('/holder', async (req, res) => {
  const result = await axios.get("https://jsonplaceholder.typicode.com/todos");
  console.log(result.data);
  res.render('holder', {data:result.data});
})
//axios로 jsonplaceholder 요청 -> 데이터를 그려보자
app.get('/holder/:id', async (req, res) => {
  const result = await axios.get(`https://jsonplaceholder.typicode.com/todos/${req.params.id}`);
  console.log(result);
  res.render('holder',{data: [result.data]});
})

app.listen(PORT, ()=>{console.log(`${PORT} 서버 구동중`)});