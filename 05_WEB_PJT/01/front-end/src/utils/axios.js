const axios = require("axios");
const api = axios.create({
  baseURL: "http://localhost:8081",
});
export const dataLab = {
  get: () => {
    return api.get("/api/data");
  }, //정보 get 요청
  post: (data) =>{
    return api.post("/api/data", data);
  } //정보 갱신 요청
}