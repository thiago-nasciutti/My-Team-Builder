//Manager Card
const managerCard = (manager) => {
 return `
    <div class="card mt-5" style="width: 18rem">
        <div class="card-header text-center text-light bg-primary">
            <h5 class="card-title">${manager.getName()}</h5>
            <h5 class="card-title">${manager.getRole()}</h5>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group">
                <li class="group-item">ID:  ${manager.getId()}</li>
                <li class="group-item">Email:   <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="group-item">Office Number:   ${manager.getOffice()}</li>
            </ul>
        </div>
    </div>
`;
};

//Engineer Card
const engineerCard = (engineer) => {
 return `
    <div class="card mt-5" style="width: 18rem">
        <div class="card-header text-center text-light bg-primary">
            <h5 class="card-title">${engineer.getName()}</h5>
            <h5 class="card-title">${engineer.getRole()}</h5>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group">
                <li class="group-item">ID:${engineer.getId()}</li>
                <li class="group-item">Email:<a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="group-item">Github:<a href="${engineer.getGithub()}">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
    `;
};

//Intern Card
const internCard = (intern) => {
 return `
    <div class="card mt-5" style="width: 18rem">
        <div class="card-header  text-center text-light bg-primary">
            <h5 class="card-title">${intern.getName()}</h5>
            <h5 class="card-title">${intern.getRole()}</h5>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group">
                <li class="group-item">ID:${intern.getId()}</li>
                <li class="group-item">Email:<a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="group-item">School:${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
    `;
};

//Build HTML
const buildHtml = (team) => {
 return ` 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <title>Team Members</title>
    </head>
    <body>
        <header>
            <h1 class="p-3 text-center text-warning bg-dark">Your Team</h1>
        </header>
        <div class="d-flex flex-wrap justify-content-evenly align-items-evenly">
            ${team.map((member) => {
             if (member.getRole() === "Manager") {
              return managerCard(member);
             }
             if (member.getRole() === "Engineer") {
              return engineerCard(member);
             }
             if (member.getRole() === "Intern") {
              return internCard(member);
             }
            })}
        </div>
    </body>
    </html>
    `;
};

module.exports = buildHtml;
