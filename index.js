// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter the title of your project:',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please enter a description for you project:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please enter the installation instructions for your project:',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please enter the usage information for this project:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Please enter any contribution information or guidelines you wish to include:',
            name: 'contribution'
        },
        {
            type: 'input',
            message: 'Please enter any testing instruction information you wish to include',
            name: 'testing',
        }
    ])
        .then((response) => {
        console.log(response);
    })

    switch (questions) {
        
    }

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
