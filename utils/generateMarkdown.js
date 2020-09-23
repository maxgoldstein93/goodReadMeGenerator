// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  random text
  more text ${data.description}

`;
}

module.exports = generateMarkdown;
