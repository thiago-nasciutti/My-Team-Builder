const Employee = require("./Employee");
class Manager extends Employee {
 constructor(passedName, passedId, passedEmail, passedOffice) {
  super(passedName, passedId, passedEmail);
  this.office = passedOffice;
 }
 getOffice() {
  return this.office;
 }
 getRole() {
  return "Manager";
 }
}

module.exports = Manager;
