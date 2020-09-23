const inquirer = require('inquirer');
const fs = require("fs");
const Choices = require('inquirer/lib/objects/choices');
require("./utils/generateMarkdown.js")

// array of questions for user
const questions = [{
    type: "input",
    message: "What is your GitHub username? ",
    name: "projectUsername"
},{
    type: "input",
    message: "What is your email address?",
    name: "projectEmail"



},{
    type: "input",
    message: "What is your project's name? ",
    name: "projectName"


},{
    type: "list",
    message: "What kind of license should your project have? ",
    name: "projectLicense",
    choices: [
        "MIT",
        "APACHE 2.0",
        "GPL 3.0",
        "BSD 3",
        "None"
    ]


},{
    type: "default",
    message: "What command should be run to install dependencies?",
    default: "npm i",
    name: "projectDep"


},{
    type: "input",
    message: "What command should be run to run tests?",
    default: "npm test",
    name: "projectTests"


},{
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "projectUserKnow"


},{
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "projectContribution"

}
    

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile("generatedReadMe.md")
}
//  call generateMArkdown from other file

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers)
            // Use user feedback for... whatever!!
        })
        .catch(error => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else when wrong
            }
        });

}

// function call to initialize program
init();

