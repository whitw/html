const titleList = document.querySelectorAll(".title")
for(let title of titleList){
  console.log(title.textContent);
}
titleList[0].textContent = "1등 영화";