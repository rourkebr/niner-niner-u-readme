// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
// const generateMarkdown = require('./utils/generateMarkdown.js');
// const writeFile = require('./utils/generate-input.js')

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email for follow up questions.');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your projects title name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please enter your project title.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please give a breif description of your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please enter a project description.');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'contents',
            message: 'Please select the elements to apply to your table of contents.',
            choices: ['installation', 'Usage', 'License', 'Contribution', 'Test', 'Questions']

        },
        {
            type: 'input',
            name: 'installation',
            message: 'What steps are required to install your project?',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter a guide for installation.');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for use.'
        },
        {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Was any licensing used in your project?',
            default: true
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select which License you used from the list',
            choices: ['Apache', 'GPL'],
            when: ({ confirmLicense }) => confirmLicense
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please add any contributors to the project, yourself included.'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide tests for you application and examples of how to run them.'
        },
    ])
};




        promptUser()
            .then(response => generateMarkdown(response))

            .then(response => {
                return writeFile(readmeinput);
            })

            .catch(err => {
                console.log(err);
            });

    // TODO: Create a function to initialize app
    function init() {}

    // Function call to initialize app
    init();
