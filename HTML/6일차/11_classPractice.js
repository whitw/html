class Lawyer{
  constructor(name, age, desc){
    this.name = name;
    this.age = age;
    this.desc = desc;
  }
  introduce(){
    console.log(`이름: ${this.name}`);
    console.log(`나이: ${this.age}`);
    console.log(`자기소개: ${this.desc}`);
  }
}

const wyw = new Lawyer("우영우", 27, "기러기");
const csy = new Lawyer("최수연", 27, "봄날의 햇살");
wyw.introduce();
csy.introduce();