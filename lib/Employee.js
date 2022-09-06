const { moduleExpression } = require("@babel/types");

class Employee {
  constructor(passedName, passedId, passedEmail) {
    this.name = passedName;
    this.id = passedId;
    this.email = passedEmail;
  }
  sayHi() {
    console.log("Hi my name is " + this.name);
  }
}

module.exports = Employee;
