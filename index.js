// Include inquirer to ask for user input on their team
const inquirer = require('inquirer');
// Include fs to write html file of user inpu
const fs = require('fs');
// Include generateHTML util to create htmlPage from user input
const generateHTML = require('./src/generateHTML');
// Include writeFile util to write htmlPage to /dist
const writeFile = require('./utils/writeFile');

// array of questions for inquirer to ask user
const questions = [
    {
        type: 'input',
        name: 'employee',
        message: 'Enter an employee name!',
        validate: (questionAnswer) => {
            if (questionAnswer) {
                return true
            }
            console.log('You must enter the name of your employee!');
            return false
        }
    }
];

function init() {
    return inquirer.prompt(questions)
}

init()
.then(htmlData => {
    console.log(htmlData);
    return generateHTML(htmlData)
})
.then(htmlPage => {
    console.log(htmlPage);
    return writeFile(htmlPage)
})
.catch(err => {
    console.log(err);
});