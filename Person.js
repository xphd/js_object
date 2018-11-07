const say = require("./say");
const yell = require("./yell");

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.say = say;
  //   this.yell = function() {
  //     console.log(name, age);
  //   };
  this.yell = yell;
}

module.exports = Person;
