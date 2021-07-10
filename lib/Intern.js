// class for Intern

const Employee = require("./Employee")

class Intern extends Employee {
  constructor(name, id, email, school){
    // employee constructor needs: name, position, id, email
    super(name, "Intern", id, email);
    
    this.school = school
  }
}

module.exports = Intern;