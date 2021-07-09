// index.js; runs team-generator app, TWH, 7/8/21

const inquirer = require("inquirer");
const Team = require("./lib/Team");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generate = require('./src/generateHTML');
const fs = require('fs');

// global variable will hold the team itself
let myTeam = new Team("My Dev Team");

// launches app
const start = () => {
    inquirer.prompt([
        { type: "input", message: "Enter in team manager's name:", name: "name" },
        { type: "input", message: "Enter in their employee ID:", name: "id" },
        { type: "input", message: "Enter in their email address:", name: "email" },
        { type: "input", message: "Enter in the office number:", name: "officeNumber" },

    ]).then( ({name, id, email, officeNumber}) => {
        // instantiate new manager
        const addedManager = new Manager(name, id, email, officeNumber)
    
        // add manager to team
        myTeam.addToTeam(addedManager);

        createTeam()
    })
}

start();

// begins createTeam (after manager finishes their input)
const createTeam = () => {
    inquirer.prompt([
        { type: "list", message: "Choose an option:", 
        choices: ["Add Engineer", "Add Intern", "Finish & Build Team"], name: "createTeam" }
    ]).then(data => {
        switch (data.createTeam) {
            case "Add Engineer":
                addEngineer();
                break;

            case "Add Intern":
                addIntern();
                break;

            case "Finish & Build Team":
                buildTeam();
                break;
        }
    })
}

// displays prompts for engineer
const addEngineer = () => {
    inquirer.prompt([
      { type: "input", message: "What's the engineer's name?", name: "name" },
      { type: "input", message: "What's their ID?", name: "id" },
      { type: "input", message: "What's their email?", name: "email" },
      { type: "input", message: "What's their GitHub username?", name: "gitHub" },
      
    ]).then( ({name, id, email, gitHub}) => {
      // instantiate a new engineer
      const addedEngineer = new Engineer(name, id, email, gitHub)
  
      // adds the engineer to the team
      myTeam.addToTeam(addedEngineer);
  
      // goes back to createTeam
      createTeam();
    });
  }

  // displays prompts for adding intern
const addIntern = () => {
    inquirer.prompt([
      { type: "input", message: "What's the intern's name?", name: "name" },
      { type: "input", message: "What's their ID?", name: "id" },
      { type: "input", message: "What's their email?", name: "email" },
      { type: "input", message: "What's their current school?", name: "school" },
      
    ]).then( ({name, id, email, school}) => {
      // instantiate a new intern
      const addedIntern = new Intern(name, id, email, school)
  
      // add the intern to the team
      myTeam.addToTeam(addedIntern);
  
      // gooes back to createTeam
      createTeam();
    });
  }

  //this invokes the src write file and passes in myTeam array of objects data?
  const buildTeam = () => {
      console.log(myTeam)

  }


// initializes file
// function startTeamFile(data) {

//     const fileName = `${data.managerName.toLowerCase()}.html`

//     writeTeamFile(fileName, data)
// }

// // function to write html file
// function writeTeamFile(fileName, data) {

//     fs.writeTeamFile(fileName, generate.generateHTML(data), (err) => {
//         if(err) console.log("err:", err);
//     })
// }