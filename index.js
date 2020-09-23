const inquirer = require('inquirer');
const fs = require("fs");
require("./utils/generateMarkdown.js")

// array of questions for user
const questions = [{
    type: "input",
    message: "What is the title of your project? ",
    name: "projectTitle"
},{
    type: "input",
    message: "What is your project description? ",
    name: "projectDescription"



},{
    type: "input",
    message: "How do users install this project? ",
    name: "projectInstall"


},{
    type: "input",
    message: "How do users use this project? ",
    name: "projectUsage"


},{
    type: "input",
    message: "What license do you want to use? ",
    name: "projectLicense"


},{
    type: "input",
    message: "Who contributed to this project? ",
    name: "projectContribution"


},{
    type: "input",
    message: "How to test this project ",
    name: "projectTest"


},{
    type: "input",
    message: "Questions about the Project?",
    name: "projectQuestions"

}
    

];

// function to write README file
function writeToFile(fileName, data) {
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

