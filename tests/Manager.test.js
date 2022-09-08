const Manager = require("../lib/Manager");

//Test Object
test("test manager object creation", () => {
 const manager = new Manager(
  "Thiago",
  "001",
  "nasciutti.thiago@gmail.com",
  "Office-T01"
 );
 expect(manager.name).toBe("Thiago");
 expect(manager.id).toBe("001");
 expect(manager.email).toBe("nasciutti.thiago@gmail.com");
 expect(manager.office).toBe("Office-T01");
});

//Test Name
test("test manager's name creation", () => {
 const manager = new Manager(
  "Thiago",
  "001",
  "nasciutti.thiago@gmail.com",
  "Office-T01"
 );
 expect(manager.getName()).toBe("Thiago");
});

//Test Id
test("test manager's id creation", () => {
 const manager = new Manager(
  "Thiago",
  "001",
  "nasciutti.thiago@gmail.com",
  "Office-T01"
 );
 expect(manager.getId()).toBe("001");
});

//Test Email
test("test manager's email creation", () => {
 const manager = new Manager(
  "Thiago",
  "001",
  "nasciutti.thiago@gmail.com",
  "Office-T01"
 );
 expect(manager.getEmail()).toBe("nasciutti.thiago@gmail.com");
});

//Test Office
test("test manager's email creation", () => {
 const manager = new Manager(
  "Thiago",
  "001",
  "nasciutti.thiago@gmail.com",
  "Office-T01"
 );
 expect(manager.getOffice()).toBe("Office-T01");
});

//Test Office
test("test manager's role creation", () => {
 const manager = new Manager(
  "Thiago",
  "001",
  "nasciutti.thiago@gmail.com",
  "Office-T01"
 );
 expect(manager.getRole()).toBe("Manager");
});
