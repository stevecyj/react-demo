// ES5 構造函數
// 父類
function People(name, age) {
  this.name = name;
  this.age = age;
  this.sayInfo = function () {
    console.log(`${this.name}今年${this.age}歲`);
  };
}

function Student(name, age) {
  // 繼承進來
  People.call(this, name, age);
}

let student = new Student('子瑜', 18);
console.log(student.name);
console.log(student.age);
