const Engineer = require("../lib/Engineer");

//Test Object
test("test if engineer object creation", () => {
 const engineer = new Engineer(
  "Thiago",
  "001",
  "nasciutti.thiago@gmail.com",
  "thiago-nasciutti"
 );
 expect(engineer.name).toBe("Thiago");
 expect(engineer.id).toBe("001");
 expect(engineer.email).toBe("nasciutti.thiago@gmail.com");
 expect(engineer.github).toBe("thiago-nasciutti");
});

//Test Name
test("test engineer's name creation", () => {
 const engineer = new Engineer(
  "Thiago",
  "001",
  "nasciutti.thiago@gmail.com",
  "thiago-nasciutti"
 );
 expect(engineer.getName()).toBe("Thiago");
});

//Test Id
test("test engineer's id creation", () => {
 const engineer = new Engineer(
  "Thiago",
  "001",
  "nasciutti.thiago@gmail.com",
  "thiago-nasciutti"
 );
 expect(engineer.getId()).toBe("001");
});

//Test email
test("test engineer's email creation", () => {
 const engineer = new Engineer(
  "Thiago",
  "001",
  "nasciutti.thiago@gmail.com",
  "thiago-nasciutti"
 );
 expect(engineer.getEmail()).toBe("nasciutti.thiago@gmail.com");
});

//Test Github
test("test engineer's GitHub creation", () => {
 const engineer = new Engineer(
  "Thiago",
  "001",
  "nasciutti.thiago@gmail.com",
  "thiago-nasciutti"
 );
 expect(engineer.getGithub()).toBe("thiago-nasciutti");
});

//Test Role
test("test engineer's creation", () => {
 const engineer = new Engineer(
  "Thiago",
  "001",
  "nasciutti.thiago@gmail.com",
  "thiago-nasciutti"
 );
 expect(engineer.getRole()).toBe("Engineer");
});
