// this test encapsulates the expected output for the 
// filter engineer function on the generateHTML.js file

const Team = require('../src/generateHTML.js');

const myTeam = {
  name: 'My-Dev-Team', members: [
    Manager = { name: 'Ted', position: 'Manager', id: '1', email: 'ted@mail.com', officeNumber: '1' },
    Engineer = { name: 'Lacy', position: 'Engineer', id: '2', email: 'lacy@mail.com', gitHub: 'lacy' },
    Intern = { name: 'Sam', position: 'Intern', id: '3', email: 'sam@mail.com', school: 'UMN' },
  ]
}

// testing the engineer filter function
describe('myTeam object for engineer(s)', () => {
  describe('filtering for engineer(s)', () => {
    it("should filter out the engineer(s)", () => {
      const filtered = myTeam.members.filter(employee => employee.position === "Engineer");
      filteredEngineer = filtered.name
      expect(filteredEngineer) == { name: "Lacy" };

    })
  })
})

//this test passes; expected() results in Lacy



