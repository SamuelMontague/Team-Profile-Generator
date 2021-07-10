const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];

function initApp() {
    startHtml();
    addMember();
}

function addMember(){
    inquirer.prompt([{
        type: "input",
        message: "Enter team member's name",
        name: "name"
    },
    {
        type: "list",
        message: "Select team member's role",
        choices:[
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
        type: "input",
        message: "Enter team member's id",
        name: "id",
    },
    {
        type: "input",
        message: "Enter team member's email address",
        name: "email",
    }])
    .then(function({name, role, id, email}){
        let roleInfo = "";
        if (role === "Engineer") {
            roleInfo = "Github User";
        } else if (role === "Intern") {
            roleInfo = "school name";
        } else {
            roleInfo = "office number";
        }
        inquirer.prompt([{
            type: "input",
            message: "Enter team member's ${roleInfo}",
            name: "roleInfo"
        },
        {
            type: "list",
            message: "would you like to add more team members?",
            choices: [
                "yes",
                "no"
            ],
            name: "addmembers"
        }])
        .then(function({roleInfo, addmembers}){
            let newMember;
            if (role === "Engineer"){
                newMember = new Engineer(name, id, email, roleInfo);
            } else if (role === "Intern") {
                newMember = new Intern(name, id, email, roleInfo);
            } else {
                newMember = new Manager(name, id, email, roleInfo);
            }
            employees.push(newMember);
            addHtml(newMember)
            .then(function(){
                if (addmembers === "yes"){
                    addMember();
                } else {
                    finishHtml();
                }
            });
        });
    });

}

function startHTML(){
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./finalProduct/employee.html", html, function(error){
        if (err) {
            console.log(err);
        }
    });
    console.log("start");        
}

function addHtml(employee) {
    return new Promise(function(resolve, reject){
        const name = employee.getName();
        const role = employee.getRole();
        const id = employee.getId();
        const email = employee.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = employee.getGithub();
            data = `<div class="container">
            <div class="row">;
                <div class="col-6">
                    <div class="card mx-auto mb-3" style="width: 18rem">
                    <h5 class="card-header">${name}<br /><br />Engineer</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email Address: ${email}</li>
                        <li class="list-group-item">GitHub: ${gitHub}</li>
                    </ul>
                    </div>
                </div>`;

        }  else if (role === "Intern"){
            const school = employee.getSchool();
            data = `<div class="container">
            <div class="row">;
                <div class="col-6">
                    <div class="card mx-auto mb-3" style="width: 18rem">
                    <h5 class="card-header">${name}<br /><br />Engineer</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email Address: ${email}</li>
                        <li class="list-group-item">School: ${school}</li>
                    </ul>
                    </div>
                </div>`;
        } else {
            const officeNumber = member.getOfficeNumber();
            data = `<div class="container">
            <div class="row">;
                <div class="col-6">
                    <div class="card mx-auto mb-3" style="width: 18rem">
                    <h5 class="card-header">${name}<br /><br />Engineer</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email Address: ${email}</li>
                        <li class="list-group-item">Office Number: ${officeNumber}</li>
                    </ul>
                    </div>
                </div>`
        }
        console.log("adding team member");
        fs.appendFile("./finalProduct/employee.html", data, function (err){
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
}

function finsihHtml() { 
    const html = `</div>
    </div> 
    </body>
    </html>`;

        fs.appendFile("./finalProduct/employee.html", html, function(err){
            if (err) {
                console.log(err);
            };
        });
        console.log("end");

}

initApp();