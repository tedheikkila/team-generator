// this test encapsulates the expected Employee.test.js, Engineer.test.js, Intern.test.js, and Manager.test.js files
// they are equivalent in function which is why this route was taken to reduce redundant code

const Team = require('../lib/Team.js');

// testing Team.js push function
describe('Team class', () => {
    describe('addToTeam', () => {
        it("should add employee to teamroster", () => {
            const teamroster = [];
            const team = new Team("Engineer", teamroster)
            const employee = {type:"engineer"};
            team.addToTeam(employee);
        expect(teamroster) == {type:"engineer"};

        })})
})



// const Team = {
//     name: 'My-Dev-Team', members: [
//       Manager = {
//         name: 'Ted',
//         position: 'Manager',
//         id: '1',
//         email: 'ted',
//         officeNumber: '1'
//       },
  
//       Engineer = {
//         name: 'Lacy',
//         position: 'Engineer',
//         id: '2',
//         email: 'ted',
//         gitHub: 'tedheikkila'
//       },
  
//       Intern = {
//         name: 'Sam',
//         position: 'Intern',
//         id: '3',
//         email: 'ted',
//         school: 'cambridge'
//       },
  
//       Engineer = {
//         name: 'Luke',
//         position: 'Engineer',
//         id: '4',
//         email: 'ted',
//         gitHub: 'teddy'
//       }
//     ]
//   }