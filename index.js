// index.js; runs team-generator app, TWH, 7/8/21

const inquirer = require("inquirer");
const Team = require("./lib/Team");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generate = require('./src/generateHTML');
const fs = require('fs');
const path = require('path')

// global variable holds team (an object w/ an array of objects)
let myTeam = new Team("My-Dev-Team");

// launches app
const start = () => {
    inquirer.prompt([
        { type: "input", message: "Enter in team manager's name:", name: "name" },
        { type: "input", message: "Enter in their employee ID:", name: "id" },
        { type: "input", message: "Enter in their email address:", name: "email" },
        { type: "input", message: "Enter in the office number:", name: "officeNumber" },

    ]).then(({ name, id, email, officeNumber }) => {
        // instantiates new manager
        const addedManager = new Manager(name, id, email, officeNumber)

        // adds manager to team
        myTeam.addToTeam(addedManager);

        createTeam()
    })
}

start();

// begins createTeam (after manager finishes their input)
const createTeam = () => {
    inquirer.prompt([
        {
            type: "list", message: "Choose an option:",
            choices: ["Add Engineer", "Add Intern", "Finish & Build Team"], name: "createTeam"
        }
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

    ]).then(({ name, id, email, gitHub }) => {
        // instantiates new engineer
        const addedEngineer = new Engineer(name, id, email, gitHub)

        // adds engineer to team
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

    ]).then(({ name, id, email, school }) => {
        // instantiate new intern
        const addedIntern = new Intern(name, id, email, school)

        // adds intern to team
        myTeam.addToTeam(addedIntern);

        // goes back to createTeam
        createTeam();
    });
}

// passes in myTeam array of objects and creates fileName for output HTML
const buildTeam = () => {

    const fileName = `${myTeam.name.toLowerCase()}.html`

    writeTeamFile(fileName, myTeam)
}

// writes html file (specifies write path to dist and writes html using src template)
const writeTeamFile = (fileName, myTeam) => {

    fs.writeFileSync(path.join("dist_", fileName), generate.generateHTML(myTeam), (err) => {
        if (err) console.log("err:", err);
    })
}