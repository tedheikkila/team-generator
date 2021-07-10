
// engineer dynamic add fcns (filter myTeam for Engineers)
function renderEngineers() {
  // console.log(Team)
  const filtered = Team.members.filter( employee => employee.position === "Engineer");
  // console.log(filtered)

  for (let i = 0; i < filtered.length; i++) {
    let engineerCard = `
    <div class="card">
      <div class="card-body">
        <h4 class="engineer-title">${filtered[i].name}</h4>
        <p class ="engineer-icon">${filtered[i].position}</p>
        <p class="card-text">ID: <span class="engineer-id">${filtered[i].id}</span></p>
        <p class="card-text"><span class="engineer-email">Email: </span><a href="mailto:${filtered[i].email}">${filtered[i].email}</a></p>
        <span class="card-text">GitHub: </span><a class ="engineer-github" href="https://github.com/${filtered[i].gitHub}" target="_blank">${filtered[i].gitHub}</a></span></p>
      </div>
    </div>
    `
    
    console.log(engineerCard)

  }

};

const Team = {
  name: 'My-Dev-Team', members: [
    Manager = {
      name: 'Ted',
      position: 'Manager',
      id: '1',
      email: 'ted',
      officeNumber: '1'
    },

    Engineer = {
      name: 'Lacy',
      position: 'Engineer',
      id: '2',
      email: 'ted',
      gitHub: 'tedheikkila'
    },

    Intern = {
      name: 'Sam',
      position: 'Intern',
      id: '3',
      email: 'ted',
      school: 'cambridge'
    },

    Engineer = {
      name: 'Luke',
      position: 'Engineer',
      id: '4',
      email: 'ted',
      gitHub: 'teddy'
    }
  ]
}

renderEngineers(Team)


// intern dynamic add fcns (filter myTeam for Interns)
// function renderInterns(myTeam) {
//   console.log(myTeam)
// }


// generates HTML for dist output
function generateHTML(myTeam) {
    return `
    
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <!--bootstrap link-->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <!--google fonts link (barlow)-->
        <link href="https://fonts.googleapis.com/css2?family=Barlow&display=swap" rel="stylesheet">
        <!--custom css link-->
        <link rel="stylesheet" href="style.css"/>
        <title>${myTeam.name}</title>
    </head>

    <body>
    <!--header (my dev team)-->
    <header class="header-team">
        <div class="jumbotron jumbotron-fluid">
            <h1 class="display-3">${myTeam.name}</h1>
            <p class="lead">team members w/personnel info</p>
        </div>
    </header>

    <!--members (manager, engineers, interns)-->
    <div class="card-deck">
      <div class="card">
        <div class="card-body">
            <!--manager-->
            <h4 class="manager-title">${myTeam.members[0].name}</h4>
            <p class = "manager-icon">${myTeam.members[0].position}</p>
            <p class="card-text">ID: <span class="manager-id">${myTeam.members[0].id}</span></p>
            <p class="card-text"><span class="manager-email">Email: </span><a href="mailto:${myTeam.members[0].email}">${myTeam.members[0].email}</a></p>
            <p class="card-text">Office Number: <span class ="manager-office">${myTeam.members[0].officeNumber}</span></p>
        </div>
      </div>

      ${renderEngineers()}
    
      ${renderInterns()}
      
    </div>

    <!--footer-->
    <footer class="footer">
      <p class="copyrights">${myTeam.name} @ 2021</p>
    </footer>

    <!--bootstrap (min and popper)-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
</body>

</html>
  `
  }

  module.exports = {
    generateHTML
  }

//     <div class="card">
//     <div class="card-body">
//     engineer
  //     <h4 class="engineer-title">${myTeam.members[1].name}</h4>
  //     <p class ="engineer-icon">${myTeam.members[1].position}</p>
  //     <p class="card-text">ID: <span class="engineer-id">${myTeam.members[1].id}</span></p>
  //     <p class="card-text"><span class="engineer-email">Email: </span><a href="mailto:${myTeam.members[1].email}">${myTeam.members[1].email}</a></p>
  //     <span class="card-text">GitHub: </span><a class ="engineer-github" href="https://github.com/${myTeam.members[1].gitHub}" target="_blank">${myTeam.members[1].gitHub}</a></span></p>
//    </div> 
//    </div>

//     <div class="card">
//     <div class="card-body">
  //      intern
  //      <h4 class="intern-title">${myTeam.members[2].name}</h4>
  //      <p class ="intern-icon">${myTeam.members[2].position}</p>
  //      <p class="card-text">ID: <span class="intern-id">${myTeam.members[2].id}</span></p>
  //      <p class="card-text"><span class="intern-email">Email: </span><a href="mailto:${myTeam.members[2].email}">${myTeam.members[2].email}</a></p>
  //      <p class="card-text">School: <span class ="intern-school"></span>${myTeam.members[2].school}</p>
//      </div>
//      </div>

