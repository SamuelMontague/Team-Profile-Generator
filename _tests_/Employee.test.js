const Employee = require("../lib/Employee")

describe("Employee class", () => {

    describe("Instantiation", () => { 
    it("Should create Employee instance", () => {
        const input = new Employee();
        expect(typeof(input)).toBe("object");
        })
    });

    describe("Constructors", () => {

    it("Should set name of employee", () => {
        const name = "Samuel";
        const employee = new Employee(name);
        expect(employee.name).toEqual(name);
    })

    // using "Foo" as meta variable

    it("Should set id of employee", () => {
        const value = 22;
        const employee = new Employee("Foo", value);
        expect(employee.id).toEqual(value);
    })

    it("Should set email of employee", () => {
        const value = "myemail@gmail.com";
        const employee = new Employee("Foo", 1, value);
        expect(employee.email).toEqual(email);
        })
    })

    describe("getName", () => {
        it("Should get name from getName()", () => {
            const value = "Sam";
            const employee = new Employee(value)
            expect(employee.getName()).toEqual(value);
        });
    })
    
    describe("getId", () => {
        it("Should get id from getId()", () => {
            const value = 22;
            const employee = new Employee("Foo", value);
            expect(employee.getId()).toEqual(value);
        });
    })

    describe("getEmail", () => {
        it("Should get email from getEmail()", () => {
        const value = "myemail@gmail.com";
        const employee = new Employee("Foo", 1, value);
        expect(employee.getEmail()).toEqual(value);
        })
    })

    describe("getRole", () => {
        it("Should get \"Employee\", from getRole()", () => {
        const value = "Employee"
        const employee = new Employee("Sam", 1, "myemail@gmail.com");
        expect(employee.getRole()).toEqual(value);
        })
    })
    
})