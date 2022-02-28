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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This project is covered under ${renderLicenseLink(license)} License.
    `
  } else {
    return "";
  }
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

`;
}

module.exports = generateMarkdown;

