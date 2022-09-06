const inquirer = require("inquirer");
const Employee = require("./lib/Employee");

//Manager Questions
const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "What is the Manager's Name ?",
  },
];

//Menu Questions
const menuQuestions = [
  {
    type: "list",
    name: "menuAnswer",
    message: "Choose what to do next:",
    choices: ["build an Engineer", "build an Intern", "build an HTML file"],
  },
];

//Engineer Questions
const engineerQuestions = [
  {
    type: "input",
    name: "engineerName",
    message: "What is the Engineer's Name ?",
  },
];

//Functions
function promptManagerFn() {
  inquirer.prompt(managerQuestions).then((managerAnswer) => {
    promptMenuFn();
  });
}

function promptMenuFn() {
  inquirer.prompt(menuQuestions).then((menuAnswers) => {
    if (menuAnswers.menuAnswer == "build an Engineer") {
      promptEngineerFn();
    }
    if (menuAnswers.menuAnswer == "build an Intern") {
      promptInternFn();
    }
    if (menuAnswers.menuAnswer == "build an HTML File") {
      promptHtmlFn();
    }
  });
}

function promptEngineerFn() {
  //console.log("buil an Engineer");
  inquirer.prompt(engineerQuestions).then((engineerAnswer) => {
    promptMenuFn();
  });
}
function promptInternFn() {
  //console.log("buil an Intern");
}
function promptHtmlFn() {
  //console.log("buil an HTML file");
}

//Prompts
// promptManagerFn();
const myNewEmployee = new Employee(
  "Thiago",
  "53",
  "thiago.nasciutti@gmail.com"
);
myNewEmployee.sayHi();
