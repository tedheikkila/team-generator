//class for Team and contains addToTeam fcn

class Team {
    constructor(name, members = []){
      this.name = name;
      this.members = members;
    }
  
    addToTeam(employee){
      this.members.push(employee)
    }
  }
  
  module.exports = Team;