class Team {
    constructor(name, position = []){
      this.name = name;
      this.position = position;
    }
  
    addToTeam(employee){
      this.position.push(employee)
    }
  }
  
  module.exports = Team;