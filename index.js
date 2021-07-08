const inquirer = require("inquirer");
const fs = require('fs');
const generate = require('./src/generateHTML')


const start = () => {
    inquirer.prompt([
        {type: "input", message: "Enter in team manager's name:", name: "managerName"},
        {type: "input", message: "Enter in team manager's employee ID:", name: "managerID"},
        {type: "input", message: "Enter in team manager's email address:", name:"managerEmail"},
        {type: "input", message: "Enter in office number:", name: "officeNumber"},
      ]).then( data => {
        
        console.log(data)
        
        createTeam()
    })

}

start();

// begins createTeam (after manager input)
const createTeam = () => {
    inquirer.prompt([
      {
        type: "list",
        message: "Choose an option:",
        choices: [ "Add Engineer", "Add Intern", "Finish & Build Team"],
        name: "createTeam"
      }
    ]).then( data => {
      switch( data.createTeam ){
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

