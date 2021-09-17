// ES5 構造函數
function People(name, age) {
  this.name = name;
  this.age = age;
  this.sayInfo = function () {
    console.log(`${this.name}今年${this.age}歲`);
  };
}

// 將 People 實例化，得到1個物件
var people = new People('子搯', 19);
people.sayInfo();
