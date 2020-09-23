const inquirer = require('inquirer');
const fs = require("fs");
const Choices = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown.js');
require("./utils/generateMarkdown.js")

// array of questions for user
const questions = [{
    type: "input",
    message: "What is your GitHub username? ",
    name: "Github"
},{
    type: "input",
    message: "What is your email address?",
    name: "Email"



},{
    type: "input",
    message: "What is your project's Title? ",
    name: "Title"


},{
    type: "input",
    message: "What is your project's description? ",
    name: "Description"


},{
    type: "list",
    message: "What kind of license should your project have? ",
    name: "License",
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
    name: "Dependencies"


},{
    type: "input",
    message: "What command should be run to run tests?",
    default: "npm test",
    name: "Tests"


},{
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "Usage"


},{
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "Contribution"

}
    

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile("generatedReadMe.md", data)
}
//  call generateMArkdown from other file

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers)
             generateMarkdown()
            
        })
        

}

// function call to initialize program
init();

