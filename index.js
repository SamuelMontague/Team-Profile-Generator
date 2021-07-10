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
        
    })

}