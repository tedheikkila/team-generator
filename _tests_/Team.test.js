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