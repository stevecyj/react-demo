// people
class People {
  // 構造器
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayInfo() {
    console.log(`${this.name}今年${this.age}歲`);
  }
}

let people = new People('路思', 22);
people.sayInfo();
