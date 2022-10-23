const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const ManagerClass = require("./lib/manager");
const EmployeeClass = require("./lib/emplyee");
const InternClass = require("./lib/intern");
const EngineerClass = require("./lib/engieer");

const managerquestions = [
  {
    type: "input",
    message: "What is your team manager's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your team manager's id number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your team manager's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your team manager's office phone number?",
    name: "phone",
  },
];

const engineerquestions = [
  {
    type: "input",
    message: "What is your engineer's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your engineer's id number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your engineer's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your engineer's GitHub username?",
    name: "github",
  },
];

const internquestions = [
  {
    type: "input",
    message: "What is your intern's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your intern's id number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your intern's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your interns school?",
    name: "school",
  },
];

const Menu = [
  {
    type: "list",
    message: "Would you like to add any additional team members?",
    choices: ["Engineer", "Intern", "No one else to add"],
    name: "add",
  },
];

console.log("");
console.log("Please follow the prompts below to build your team!");
console.log("");

function init() {
  inquirer.prompt(managerquestions).then((answers) => {
    addMenu();
  });
}

function addMenu() {
  inquirer.prompt(Menu).then((answers) => {
    if (answers.add === "Engineer") {
      initEngineer();
    } else if (answers.add === "Intern") {
      initIntern();
    } else {
      return;
    }
  });
}

function initEngineer() {
  inquirer.prompt(engineerquestions).then((answers) => {
    addMenu();
  });
}
function initIntern() {
  inquirer.prompt(internquestions).then((answers) => {
    addMenu();
  });
}

init();
