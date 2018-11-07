function yell() {
  console.log(this.name, this.age);
}

module.exports = yell;
