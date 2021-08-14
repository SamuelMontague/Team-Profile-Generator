const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generate = require('./src/genesis');

const team = [];

// houses all of the inquirer functionality; prompts the user for all information to be used for HTML
const start = () => {

  // begins by prompting user for manager information
  const managerInput = () => {
    inquirer.prompt([
    {
      name: "managerName",
      type: 'input',
      message: "Please enter the name of the project manager."
    },
    {
      name: "managerId",
      type: 'input',
      message: "Please enter the manager's ID number."
    },
    {
      name: "managerEmail",
      type: 'input',
      message: "Please enter the manager's email address."
    },
    {
      name: "officeNumber",
      type: 'input',
      message: "Please enter the manager's office number."
    }
    ]).then(resp => {
      const manager = new Manager(resp.managerName, resp.managerId, resp.managerEmail, resp.officeNumber);
      team.push(manager);
      buildTeam();
    })
  }

  // user determines which type of member to build or if the team is complete
  const buildTeam = () => {
    inquirer.prompt([
      {
        name: "memberType",
        type: 'list',
        message: "What type of member are you adding to the team?",
        choices: ["Engineer", "Intern", "None; my team is complete."]
      }
    ]).then(resp => {
      switch(resp.memberType){
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;

        default:
          renderTeam();
      }
    })
  }

  // user builds engineer
  const addEngineer = () => {
    inquirer.prompt([
      {
        name: "engineerName",
        type: 'input',
        message: "Please enter the engineer's name."
      },
      {
        name: "engineerId",
        type: 'input',
        message: "Please enter the engineer's ID number."
      },
      {
        name: "engineerEmail",
        type: 'input',
        message: "Please enter the engineer's email address."
      },
      {
        name: "gitHub",
        type: 'input',
        message: "Please enter the engineer's GitHub profile name."
      }
    ]).then(resp => {
      const engineer = new Engineer(resp.engineerName, resp.engineerId, resp.engineerEmail, resp.gitHub);
      team.push(engineer);
      buildTeam();
    })
  }

  // user builds intern
  const addIntern = () => {
    inquirer.prompt([
      {
        name: "internName",
        type: 'input',
        message: "Please enter the intern's name."
      },
      {
        name: "internId",
        type: 'input',
        message: "Please enter the intern's ID number."
      },
      {
        name: "internEmail",
        type: 'input',
        message: "Please enter the intern's email address."
      },
      {
        name: "school",
        type: 'input',
        message: "Please enter the school that the intern attended."
      }
    ]).then(resp => {
      const intern = new Intern(resp.internName, resp.internId, resp.internEmail, resp.school);
      team.push(intern);
      buildTeam();
    })
  }

  // uses exported function from genesis.js in src folder to render final HTML based on user input
  const renderTeam = () => {
    fs.writeFile('./output/team-profile.html', generate(team), (error) => {
      (error) ? console.log(error) : console.log("Your Team web page is complete!")
    })
  }

  managerInput();
}

start();