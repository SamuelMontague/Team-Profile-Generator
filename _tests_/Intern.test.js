const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern class", () => {

  describe("Constructors", () => {
    
    it("should pass school through arguments", () => {
      const school = "MIT";
      const input = new Intern("greenTshirt", 27, "email@email.com", school);

      expect(input.school).toEqual(school);
    })
  })

  describe("Methods", () => {

    it("getSchool() grabs school", () => {
      const school = "Caltech";
      const input = new Intern("redShirt", 27, "email@email.com", school);

      expect(input.getSchool()).toEqual(school);
    })

    it("getRole() grabs 'Intern'", () => {
      const role = "Intern";
      const input = new Intern("greenTshirt", 27, "email@email.com", "School of hard knocks");

      expect(input.getRole()).toEqual(role);
    })
  })
})