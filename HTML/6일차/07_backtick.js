const myName = "김상현";
const introduce = "제 이름은 " + myName + "입니다";
const introduce2 = `제 이름은 ${myName}입니다`;

console.log(introduce);
console.log(introduce2);

/*
const enterInString = "안녕하세요
저는 엔터를 포함하고 있습니다.";
//error
*/
const enterInString = `안녕하세요
저는 엔터를 포함하고 있습니다.`;
console.log(enterInString);