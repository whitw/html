import axios from "axios";

//request로 요청하게 되면
//기본적으로 baseURL이 들어간 채로 시작한다.
//`요청 기본 정보`
const request = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

export const api = {
  jsonplaceholder:{
    findAll:() => request.get('/todos'),
    findOne:(id) => request.get(`/todos/${id}`)
  }
}