const Manager = require("../lib/Manager");

describe("Manager class", () => {

  describe("Constructors", () => {
    
    it("should pass office number through arguments", () => {
      const office = 22;
      const input = new Manager("greenTshirt", 33, "email@email.com", office);

      expect(input.office).toEqual(office);
    })
  })

  describe("Methods", () => {

    it("should getOffice() retrieves office", () => {
      const office = 56;
      const input = new Manager("greenTshirt", 33, "email@email.com", office);

      expect(input.getOfficeNumber()).toEqual(office);
    })

    it("shoula getRole() retrieves 'Manager'", () => {
      const role = "Manager";
      const input = new Manager("greenTshirt", 333, "email@email.com", 22);

      expect(input.getRole()).toEqual(role);
    })
  })
})