//const studentInfo = new Object(); // {}
//new Array(); //[]

class StudentInfo { //사용자 정의 type: 대문자 시작
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.address = "";
  }
  sayMyName() {
    console.log(`my name is ${this.name}`);
  }
  setAddress(address) {
    this.address = address;
  }
  getAddress() {
    return this.address;
  }
  useMethod() {
    this.sayMyName();
  }
  getThis(){
    console.log("returned this");
    return this;
  }

}; //타 언어의 클래스 -> js: 프로토타입

const student1 = new StudentInfo("jony", 30);
const student2 = new StudentInfo("david", 50);
student1.sayMyName();
student1.setAddress("경기 군보시 산본동");
console.log(student1.getAddress());
student1.useMethod();