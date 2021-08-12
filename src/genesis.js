const HTML = []

// compiles all team members to HTML
const generatePage = myTeam => {

  // renders head of the page along with the manager HTML 
  const managerCard = (manager) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
      />
      <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
      crossorigin="anonymous"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Graduate&family=Quicksand&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="./style.css" />
      <title>My Team</title>
    </head>
    <body>
      <header>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
          <h1 class="display-4">My Team</h1>
          <p class="lead">The talented individuals we have assembled to make this project happen!</p>
          </div>
        </div>
      </header>
      <div class="container">
      <div class="row">
      <div class="col-12 d-flex fluid justify-content-around cards">
        <div class="card border-dark mb-3" style="max-width: 18rem;">
          <div class="card-header"><h4>${manager.getName()}</h4></div>
          <div class="card-body text-dark">
            <h5 class="card-title"><i class="fas fa-tasks"></i>  ${manager.getRole()}</h5>
            <p class="card-text">ID#: ${manager.getId()}</p>
            <p class="card-text">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
            <p class="card-text">Office: ${manager.getOfficeNumber()}</p>
          </div>
        </div>`
  }

  // adds the head of the page and the manager through the template above to the HTML
  HTML.push(myTeam.filter(member => member.getRole() === "Manager").map(manager => managerCard(manager)));

  const engineerCard = (engineer) => {
    return `
    <div class="card border-dark mb-3" style="max-width: 18rem;">
      <div class="card-header"><h4>${engineer.getName()}</h4></div>
      <div class="card-body text-dark">
        <h5 class="card-title"><i class="fas fa-wrench"></i>  ${engineer.getRole()}</h5>
        <p class="card-text">ID#: ${engineer.getId()}</p>
        <p class="card-text">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
        <p class="card-text">GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a></p>
      </div>
    </div>`
  }

  // adds each engineer object through the template above to the HTML
  HTML.push(myTeam.filter(member => member.getRole() === "Engineer").map(engineer => engineerCard(engineer)).join(``));

  const internCard = (intern) => {
    return `
    <div class="card border-dark mb-3" style="max-width: 18rem;">
      <div class="card-header"><h4>${intern.getName()}</h4></div>
      <div class="card-body text-dark">
        <h5 class="card-title"><i class="fas fa-pencil-alt"></i>  ${intern.getRole()}</h5>
        <p class="card-text">ID#: ${intern.getId()}</p>
        <p class="card-text">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
        <p class="card-text">School: ${intern.getSchool()}</p>
      </div>
    </div>`
  }

  // adds each intern object through the template above to the HTML
  HTML.push(myTeam.filter(member => member.getRole() === "Intern").map(intern => internCard(intern)).join(``));

  return HTML.join(``);
}

// finishes the HTML page and exports the product
module.exports = function (myTeam){
  return `
    ${generatePage(myTeam)}
  </div>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="../index.js"></script>
  <script src="../lib/"></script>
  </body>
  </html>`
}