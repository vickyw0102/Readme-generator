// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  ${data.Description}

  ## Table of Content

  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)
  -[Contributing](#contributing)
  -[Tests](#tests)
  -[Questions](#questions)

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## License 
  [![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)
  ${data.License}

  ## Contributing
  ${data.Contributing}

  ## Tests
  ${data.Tests}

  ## Questions
  ${data.Questions}



`;
}

module.exports= generateMarkdown;
// console.log(module.exports);