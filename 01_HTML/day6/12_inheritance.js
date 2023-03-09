class Hero{
  constructor(hp){
    this.hp = hp;
  }
  showHP(){
    console.log(this.hp);
  }
  run(){
    this.hp -= 10;
  }
};

const batman = new Hero(100);
batman.showHP();
batman.run();
batman.run();
batman.showHP();

class SuperMan extends Hero {
  constructor(){
    super(100);
  }
  run(){
    super.run();
  }
  fly() {
    console.log("fly");
  }
}

const superman = new SuperMan(200);
superman.showHP();
superman.run();
superman.fly();
superman.showHP();