const btn = document.querySelector("button");
btn.addEventListener("click", async ()=>{
  try{
    const response = await axios.get("http://localhost:8080/api/info");
    console.log(response.data);
  } catch(error) {
    console.log(error)
  } //CORS ERROR
});