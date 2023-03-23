const dotenv = require('dotenv');
const axios = require("axios");
const { request } = require('express');
dotenv.config();
const url = "https://openapi.naver.com/v1/datalab/search";
const headers = {
  "X-Naver-Client-Id": process.env.CLIENT_ID,
  "X-Naver-Client-Secret": process.env.CLIENT_SECRET,
  "Content-Type": "application/json"
}


const post = (reqBody) => {
  const request_body = {
    //startDate:"YYYY-MM-DD"
    //endDate  :"YYYY-MM-DD"
    //timeUnit: "date" | "week" | "month"
    //keywordGroups:[
    //  {groupName:%s, keywords:[%s]}
    //]
    startDate : reqBody.startDate,
    endDate : reqBody.endDate,
    timeUnit : reqBody.timeUnit,
    keywordGroups: reqBody.keywordGroups
  }
  return axios.post(url, request_body, {headers});
}

module.exports = {
  post,

};