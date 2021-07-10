
// engineer dynamic add fcns (filters myTeam & generates engr html)
function renderEngineers(myTeam) {
  const filtered = myTeam.members.filter( employee => employee.position === "Engineer");

  let engineerCards = ""

  for (let i = 0; i < filtered.length; i++) {
    let engineerCard = `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">
        <div class="card-body">
          <h4 class="engineer-title">${filtered[i].name}</h4>
          <p class ="engineer-icon">${filtered[i].position}</p>
          <p class="card-text">ID: <span class="engineer-id">${filtered[i].id}</span></p>
          <p class="card-text"><span class="engineer-email">Email: </span><a href="mailto:${filtered[i].email}">${filtered[i].email}</a></p>
          <span class="card-text">GitHub: </span><a class ="engineer-github" href="https://github.com/${filtered[i].gitHub}" target="_blank">${filtered[i].gitHub}</a>
        </div>
      </div> 
    </div>
    `
    engineerCards += engineerCard
  }

  return engineerCards
};

// intern dynamic add fcns (filter myTeam & generates intern html)
function renderInterns(myTeam) {
  const filtered = myTeam.members.filter( employee => employee.position === "Intern");

  let internCards = ""

  for (let i = 0; i < filtered.length; i++) {
    let internCard = `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">
        <div class="card-body">
          <h4 class="intern-title">${filtered[i].name}</h4>
          <p class ="intern-icon">${filtered[i].position}</p>
          <p class="card-text">ID: <span class="intern-id">${filtered[i].id}</span></p>
          <p class="card-text"><span class="intern-email">Email: </span><a href="mailto:${filtered[i].email}">${filtered[i].email}</a></p>
          <p class="card-text">School: <span class ="intern-school"></span>${filtered[i].school}</p>
        </div>
      </div> 
    </div>
    `
    internCards += internCard
  }

  return internCards
}

// generates HTML for dist output (manager is embedded in)
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
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4">
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
        </div>

        <!--engineers & interns-->
        ${renderEngineers(myTeam)}
      
        ${renderInterns(myTeam)}
    
      </div>
    </div>

    <!--footer-->
    <footer class="footer">
      <p class="copyrights">${myTeam.name} @ 2021: TWH</p>
    </footer>

    <!--jQuery (min)-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <!--bootstrap (min and popper)-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
</body>

</html>
  `
  }

//exporting this fcn for fs to write html in dist
  module.exports = {
    generateHTML
  }