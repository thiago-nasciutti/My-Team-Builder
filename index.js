//Requires
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const buildHtml = require("./src/template");

//Global Variables
const teamMembers = [];

//Manager Questions
const managerQuestions = [
 {
  type: "input",
  name: "managerName",
  message: "What is the Manager's Name ?",
 },
 {
  type: "input",
  name: "managerId",
  message: "What is the Manager's Id ?",
 },
 {
  type: "input",
  name: "managerEmail",
  message: "What is the Manager's Email ?",
 },
 {
  type: "input",
  name: "managerOffice",
  message: "What is the Manager's Office Number ?",
 },
];

//Menu Questions
const menuQuestions = [
 {
  type: "list",
  name: "menuAnswer",
  message: "Choose what to do next:",
  choices: ["Build an Engineer", "Build an Intern", "Build an HTML file"],
 },
];

//Engineer Questions
const engineerQuestions = [
 {
  type: "input",
  name: "engineerName",
  message: "What is the Engineer's Name ?",
 },
 {
  type: "input",
  name: "engineerId",
  message: "What is the Engineer's Id ?",
 },
 {
  type: "input",
  name: "engineerEmail",
  message: "What is the Engineer's Email ?",
 },
 {
  type: "input",
  name: "engineerGithub",
  message: "What is the Engineer's Github ?",
 },
];

//Intern Questions
const internQuestions = [
 {
  type: "input",
  name: "internName",
  message: "What is the Intern's Name ?",
 },
 {
  type: "input",
  name: "internId",
  message: "What is the Intern's Id ?",
 },
 {
  type: "input",
  name: "internEmail",
  message: "What is the Intern's Email ?",
 },
 {
  type: "input",
  name: "internSchool",
  message: "What is the Intern's School ?",
 },
];

//Functions
function promptManagerFn() {
 console.log("          *****  MANAGER  ****");
 inquirer.prompt(managerQuestions).then((managerAnswers) => {
  const manager = new Manager(
   managerAnswers.managerName,
   managerAnswers.managerId,
   managerAnswers.managerEmail,
   managerAnswers.managerOffice
  );
  teamMembers.push(manager);
  promptMenuFn();
 });
}

function promptMenuFn() {
 console.log("          *****  MENU  ****");
 inquirer.prompt(menuQuestions).then((menuAnswers) => {
  if (menuAnswers.menuAnswer == "Build an Engineer") {
   promptEngineerFn();
  }
  if (menuAnswers.menuAnswer == "Build an Intern") {
   promptInternFn();
  }
  if (menuAnswers.menuAnswer == "Build an HTML file") {
   promptHtmlFn();
  }
 });
}

function promptEngineerFn() {
 console.log("          *****  ENGINEER  ****");
 inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
  const engineer = new Engineer(
   engineerAnswers.engineerName,
   engineerAnswers.engineerId,
   engineerAnswers.engineerEmail,
   engineerAnswers.engineerGithub
  );
  teamMembers.push(engineer);
  promptMenuFn();
 });
}

function promptInternFn() {
 console.log("          *****  INTERN  ****");
 inquirer.prompt(internQuestions).then((internAnswers) => {
  const intern = new Intern(
   internAnswers.internName,
   internAnswers.internId,
   internAnswers.internEmail,
   internAnswers.internSchool
  );
  teamMembers.push(intern);
  promptMenuFn();
 });
}

function promptHtmlFn() {
 console.log("HTML");
 fs.writeFile("./dist/index.html", buildHtml(teamMembers), (error) => {});
}

//Call Functions
promptManagerFn();
