const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(passedName, passedId, passedEmail, passedGithub) {
    super(passedName, passedId, passedEmail);
    this.github = passedGithub;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
};

module.exports = Engineer;
