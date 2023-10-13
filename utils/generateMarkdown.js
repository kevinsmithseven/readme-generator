// Generate badge link based on chosen license
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT License':
      return `![MIT Badge](https://img.shields.io/badge/License-MIT-blue)`
    case 'Apache License 2.0':
      return `![Apache Badge](https://img.shields.io/badge/License-Apache_2.0-orange)`
    case 'GNU General Public License v3.0':
      return `![GNU Badge](https://img.shields.io/badge/License-GNU_v3-green)`
    case 'Creative Commons Zero v1.0':
      return `![Creative Badge](https://img.shields.io/badge/License-Creative_v1-yellow)`
    default: 
      return "";
  }
}


// If there is no license, return an empty string
function renderLicenseLink(license) {
  return (license === 'No License') ? "" :  "- [License](#license)";
 }


// If there is no license, return an empty string
function renderLicenseSection(license) {
  return (license === 'No License') ? "" : `## License

  This project is covered under the ${license}.`
 }

const generateReadme = ({ title, description, installation, usage, credits, contribution, testing, license, github, email }) =>

  `# ${title}

## Description

${description}

${renderLicenseBadge(license)}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(license)}

## Installation

${installation}

## Usage

${usage}

## Credits

${credits}

${renderLicenseSection(license)}

## How to Contribute

${contribution}

## Tests

${testing}

## Questions

Please visit my [GitHub profile](https://github.com/${github}/) or email me at [${email}](mailto:${email}) with any questions.`


module.exports = generateReadme;
