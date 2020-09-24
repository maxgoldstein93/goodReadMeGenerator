// function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.Title}
  
## License
  
![License: ${data.License}](https://img.shields.io/badge/License-${data.License}-yellow.svg)

## Description

${data.Description}

## Table of Contents

* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
* [License](#License)

## Installation

To install necessary dependencies, run the following command:

 \`\`\`${data.Dependencies}\`\`\`

## Usage

  ${data.Usage}

## License

This apllication is licensed under the ${data.License} license.

## Contributing

${data.Contribution}

# Tests
  To run tests, run the following command:
 
  \`\`\`${data.Tests}\`\`\`


# Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.Email}. You can find more of my work on my GitHub ${data.Github}.

`;
}

module.exports = generateMarkdown;
