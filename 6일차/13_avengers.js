class Person{
  constructor(name, hp){
    this.name = name;
    this.hp = hp;
  }
  hello(){
    console.log(this.name);
  }
}

class Avengers{
  constructor(name, hp, power, skill){
    super(name, hp)
    this.power = power;
    this.skill = skill;
  }
  information() {
    console.log(this.name);
    console.log(this.hp);
    console.log(this.power);
    console.log(this.skill);
  }
  fly(){
    console.log("비행중");
  }
}


