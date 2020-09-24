// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  
  ## License

  ![License](https://img.shields.io/static/v1?label=${data.License}&message=license&color=red)

  ## Description

  ${data.Description}

  ## Table of Contents

  ## Installation

  To install necessary dependencies, run the following command:

  ${data.Dependencies}

  ## Usage

  ${data.Usage}

  ## Contributing

  ${data.Contribution}

  # Tests
  To run tests, run the following command:
  
  ${data.Tests}

  # Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.Email}. You can find more of my work at ${data.Github}.

`;
}

module.exports = generateMarkdown;
