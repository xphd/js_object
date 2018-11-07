function say(content) {
  //在类中，访问类自身的属性，必须使用this.属性调用。
  console.log(
    "我叫" + this.name + ",今年" + this.age + "岁,我说了一句话：" + content
  );
}

module.exports = say;
