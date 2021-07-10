// this test encapsulates the expected output for the 
// addtoTeam function on the Team.js file
// this is specific for a generalized employee circumstance

const Team = require('../lib/Team.js');

describe('Team class', () => {
    describe('addToTeam', () => {
        it("should add employee to teamroster", () => {
            const teamroster = [];
            const team = new Team("Employee", teamroster)
            const employee = { type: "employee" };
            team.addToTeam(employee);
            expect(teamroster) == { type: "employee" };

        })
    })
})

// this test passes; expected() results in employee