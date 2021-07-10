// class for Engineer

const Employee = require("./Employee")

class Engineer extends Employee {
  constructor(name, id, email, gitHub){
    // employee constructor needs: name, position, id, email
    super(name, "Engineer", id, email);
    
    this.gitHub = gitHub
  }
}

module.exports = Engineer;