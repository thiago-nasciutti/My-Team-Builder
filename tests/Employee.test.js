const Employee = require("../lib/Employee");

//Test Object
test("test if employee object creation", () => {
 const employee = new Employee("Thiago", "001", "nasciutti.thiago@gmail.com");
 expect(employee.name).toBe("Thiago");
 expect(employee.id).toBe("001");
 expect(employee.email).toBe("nasciutti.thiago@gmail.com");
});

//Test Name
test("test if the employee's name creation", () => {
 const employee = new Employee("Thiago", "001", "nasciutti.thiago@gmail.com");
 expect(employee.getName()).toBe("Thiago");
});

//Test Id
test("test if employee's id creation", () => {
 const employee = new Employee("Thiago", "001", "nasciutti.thiago@gmail.com");
 expect(employee.getId()).toBe("001");
});

//Test email
test("test if employee's email creation", () => {
 const employee = new Employee("Thiago", "001", "nasciutti.thiago@gmail.com");
 expect(employee.getEmail()).toBe("nasciutti.thiago@gmail.com");
});

//Test Role
test("test if employee's role creation", () => {
 const employee = new Employee("Thiago", "001", "nasciutti.thiago@gmail.com");
 expect(employee.getRole()).toBe("Employee");
});
