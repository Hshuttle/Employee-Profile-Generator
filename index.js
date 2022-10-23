const inquirer = require("inquirer");
const fs = require("fs");

const managerquestions = [
  {
    type: "input",
    message: "What is your team manager's name?",
    name: "managername",
  },
  {
    type: "input",
    message: "What is your team manager's id number?",
    name: "managerid",
  },
  {
    type: "input",
    message: "What is your team manager's email?",
    name: "manageremail",
  },
  {
    type: "input",
    message: "What is your team manager's office phone number?",
    name: "managerphone",
  },
  {
    type: "list",
    message: "Would you like to add any additional team members?",
    choices: ["Engineer", "Intern", "No one else to add"],
    name: "manageradd",
  },
];

const engineerquestions = [
  {
    type: "input",
    message: "What is your engineer's name?",
    name: "engineername",
  },
  {
    type: "input",
    message: "What is your engineer's id number?",
    name: "engineerid",
  },
  {
    type: "input",
    message: "What is your engineer's email?",
    name: "engineeremail",
  },
  {
    type: "input",
    message: "What is your engineer's GitHub username?",
    name: "engineergithub",
  },
  {
    type: "list",
    message: "Would you like to add any additional team members?",
    choices: ["Engineer", "Intern", "No one else to add"],
    name: "engineeradd",
  },
];

const internquestions = [
  {
    type: "input",
    message: "What is your intern's name?",
    name: "internname",
  },
  {
    type: "input",
    message: "What is your intern's id number?",
    name: "internid",
  },
  {
    type: "input",
    message: "What is your intern's email?",
    name: "internemail",
  },
  {
    type: "input",
    message: "What is your interns school?",
    name: "internschool",
  },
  {
    type: "list",
    message: "Would you like to add any additional team members?",
    choices: ["Engineer", "Intern", "No one else to add"],
    name: "internadd",
  },
];

console.log("");
console.log("Please follow the prompts below to build your team!");
console.log("");

// inquirer.prompt(managerquestions).then((answers) => {
//   const FILENAME =
//     answers.managername.toLowerCase().split(" ").join("") + ".json";
//   fs.writeFile(FILENAME, JSON.stringify(answers), (err) => {
//     err ? console.error(err) : console.log("Successfully wrote to file");
//   });
// });
function init() {
  inquirer.prompt(managerquestions).then((answers) => {
    if ((answers.memberType = "Engineer")) {
      inquirer.prompt(engineerquestions).then((answers) => {});
    } else if ((answers.memberType = "Intern")) {
      inquirer.prompt(internquestions).then((answers) => {});
    } else {
    }
  });
}

init();
