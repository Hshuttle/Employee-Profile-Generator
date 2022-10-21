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
    message: "What is your team manager's name?",
    name: "managername",
  },
  {
    type: "input",
    message: "What is your team manager's office phone number?",
    name: "managerphone",
  },
];
console.log("Please follow the prompts below to build your team!");
// inquirer.prompt(managerquestions).then((answers) => {
//   fs.writeFileSync(path.join(__dirname, "/dist/", "teammembers.html"));
// });
inquirer.prompt(managerquestions).then((answers) => {
  const FILENAME =
    answers.managername.toLowerCase().split(" ").join("") + ".json";
  fs.writeFile(FILENAME, JSON.stringify(answers), (err) => {
    err ? console.error(err) : console.log("Successfully wrote to file");
  });
});
