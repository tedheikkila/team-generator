// this test encapsulates the expected output for the 
// addtoTeam function on the Team.js file
// this is specific to a manager circumstance

const Team = require('../lib/Team.js');

describe('Team class', () => {
    describe('addToTeam', () => {
        it("should add manager to teamroster", () => {
            const teamroster = [];
            const team = new Team("Manager", teamroster)
            const manager = { type: "manager" };
            team.addToTeam(manager);
            expect(teamroster) == { type: "manager" };

        })
    })
})

//this test passes; expected() results in manager
