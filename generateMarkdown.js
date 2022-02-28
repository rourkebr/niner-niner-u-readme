function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ## description
  ${data.description}

  ### Table of Contents
  * [GitHub Username] (#github)
  * [Email](#email)
  * [Title](#title)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Test](#test)

   #### GitHub
 [Profile](https://github.com/${data.github})

  #### Installation
  ${data.instalation}

  #### License
  ${data.license}
  ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

  #### Usage
  ${data.usage}
`;
}

module.exports = generateMarkdown;

