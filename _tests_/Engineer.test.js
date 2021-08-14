const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {

    describe("Constructors", ()=> {
        
        it( "passes github args", () => {
            const github = "charley";
            const input = new Engineer("greenTshirt", 27, "charley@email.com", github);

            expect(input.github).toEqual(github);
        })
    })

    describe("Methods", () => {
        it("github retrieves github" , () => {
            const github = 56;
            const input = new Engineer("greenTshirt", 27, "charley@email.com", github)

            expect(input.getGithub()).toEqual(github);
        })

        it("getRole() finds Engineer", () => {
            const role = "Engineer";
            const input = new Engineer("greenTshirt", 27, "charley@email.com", "goner")

            expect(input.getRole()).toEqual(role);
        })
    })
})