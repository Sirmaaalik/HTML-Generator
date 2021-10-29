// Edit all of this for project 10: not done
const fs = require('fs');
const inquirer = require('inquirer');
const server = require('./assets/server');

// Array of questions for manager
const questions = [
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'Name',
        message: 'Manager name: ',
        validate: projectInput => {
            if(projectInput) {
                return true;
            } else {
                console.log("Please input the manager's name: ")
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'ID',
        message: 'Manager ID: ',
        validate: descriptionInput => {
            if(descriptionInput) {
                return true;
            } else {
                console.log("Please input the manager ID: ")
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'Email',
        message: 'Manager email address: ',
        validate: installInput => {
            if(installInput) {
                return true;
            } else {
                console.log('Please input installing instructions:')
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'Number',
        message: 'Manager office number: ',
        validate: usageInput => {
            if(usageInput) {
                return true;
            } else {
                console.log('Please input usage information:')
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'Contribution Guidelines',
        validate: contributeInput => {
            if(contributeInput) {
                return true;
            } else {
                console.log('Please input contribution guidelines:')
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file 
const writeToFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
        if (err) {
            reject(err);
            return;
        }
    
        resolve({
            ok: true,
            message: 'File created!'
        });
        });
    });
};