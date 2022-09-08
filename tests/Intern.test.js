const Intern = require("../lib/Intern");

//Test Object
test("test intern object creation", () => {
 const intern = new Intern(
  "Thiago",
  "001",
  "nasciutti.thiago@gmail.com",
  "University of Uberlandia"
 );
 expect(intern.name).toBe("Thiago");
 expect(intern.id).toBe("001");
 expect(intern.email).toBe("nasciutti.thiago@gmail.com");
 expect(intern.school).toBe("University of Uberlandia");
});

//Test Name
test("test manager's name creation", () => {
 const intern = new Intern(
  "Thiago",
  "001",
  "nasciutti.thiago@gmail.com",
  "University of Uberlandia"
 );
 expect(intern.getName()).toBe("Thiago");
});

//Test Id
test("test intern's id creation", () => {
 const intern = new Intern(
  "Thiago",
  "001",
  "nasciutti.thiago@gmail.com",
  "University of Uberlandia"
 );
 expect(intern.getId()).toBe("001");
});

//Test Email
test("test intern's email creation", () => {
 const intern = new Intern(
  "Thiago",
  "001",
  "nasciutti.thiago@gmail.com",
  "University of Uberlandia"
 );
 expect(intern.getEmail()).toBe("nasciutti.thiago@gmail.com");
});

//Test School
test("test intern's school creation", () => {
 const intern = new Intern(
  "Thiago",
  "001",
  "nasciutti.thiago@gmail.com",
  "University of Uberlandia"
 );
 expect(intern.getSchool()).toBe("University of Uberlandia");
});

//Test Role
test("test intern's creation", () => {
 const intern = new Intern(
  "Thiago",
  "001",
  "nasciutti.thiago@gmail.com",
  "University of Uberlandia"
 );
 expect(intern.getRole()).toBe("Intern");
});
