const Employee = require("./Employee");
class Intern extends Employee {
 constructor(passedName, passedId, passedEmail, passedSchool) {
  super(passedName, passedId, passedEmail);
  this.school = passedSchool;
 }
 getSchool() {
  return this.school;
 }
 getRole() {
  return "Intern";
 }
}

module.exports = Intern;
