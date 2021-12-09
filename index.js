//Edit all of this for project 10: not done
const inquirer = require("inquirer");
const fs = require("fs");

//Team Profiles
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const { mainModule } = require("process");
const path = require("path");

const generatePage = require("./src/server");

//Team Array
const teamArray = [];

const DIR = path.resolve(__dirname, "output");
const PATH = path.join(DIR, "team.html");

//Manager Input
const addManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "The name of the manager",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("please enter the manager's name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the manager's id.",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter the manager's ID");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the manager's email",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number",
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);
      teamArray.push(manager);
      console.log(manager);
      addEmployee();
    });
};

//Adding  employees to the team
const addEmployee = () => {
  console.log("adding employees to the team");
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Please choose your employee's role",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What's the name of the employee?",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the employee's ID.",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter employee's email.",
      },
      {
        type: "input",
        name: "github",
        message: "Please enter the employee's github username.",
        when: (input) => input.role === "Engineer",
      },
      {
        type: "input",
        name: "school",
        message: "Please enter the intern's school.",
        when: (input) => input.role === "Intern",
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add more team members?",
      },
    ])

    .then((employeeData) => {
      //data for employee types
      let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
      let employee;
      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
        console.log(employee);
      }
      teamArray.push(employee);
      if (confirmAddEmployee) {
        addEmployee();
      } else {
        console.log(teamArray);        
        generatePage(teamArray);
      }
    });
};

//function to initialize app
function init() {
  addManager();
}

init();