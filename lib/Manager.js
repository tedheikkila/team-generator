const Employee = require("./Employee")

class Manager extends Employee {
  constructor(name, id, email, officeNumber){
    // employee constructor needs: name, position, id, email
    super(name, "Manager", id, email);
    
    this.officeNumber = officeNumber
  }
}

module.exports = Manager;