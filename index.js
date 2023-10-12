// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown')

const generateReadme = ({ title, description, installation, usage, credits, contribution, testing, license, github, email }) =>
    `# ${title}

## Description

${description}
need to call function to display license badge?

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

## Credits

${credits}

## License

This project is covered under the ${license}.

## How to Contribute

${contribution}

## Tests

${testing}

## Questions

Please visit my [GitHub profile](https://github.com/${github}/) or email me at [${email}](mailto:${email}) with any questions.`


// TODO: Create an array of questions for user input
inquirer
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
            message: 'Please enter any credits you wish to include:',
            name: 'credits',
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
        },
        {
            type: 'list',
            message: 'Please select a license to use for this project',
            name: 'license',
            choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License v3.0', 'Creative Commons Zero v1.0'],
        },
        {
            type: 'input',
            message: 'Please enter your Github username:',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Please enter your email address:',
            name: 'email'
        }
    ])
    .then((userinput) => {
        const readmePageContent = generateReadme(userinput);

        fs.writeFile('./output/README.md', readmePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully generated README.md')
        );
    })



