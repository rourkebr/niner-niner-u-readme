// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == 'Apache-2.0') {
   return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  else if (license == 'GPL') {
    return "![License](https://img.shields.io/badge/License-GPL-brightgreen)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Apache-2.0') {
    return '[Apache-2.0](https://opensource.org/licenses/Apache-2.0)';
  }
  else if (license == "GPL") {
    return "[GPL](https://www.gnu.org/licenses/gpl-3.0)";
  }
}


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
  ![GitHub license](https://img.shields.io/badge/license-${datalicense}-blue.svg)

  #### Usage
  ${data.usage}
`;
}

module.exports = generateMarkdown;

