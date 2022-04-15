// Include inquirer to ask for user input on their team
const inquirer = require('inquirer');
// Include fs to write html file of user inpu
const fs = require('fs');
// Include generateHTML util to create htmlPage from user input
const generateHTML = require('./src/generateHTML');
// Include writeFile util to write htmlPage to /dist
const writeFile = require('./utils/writeFile');
// Include Manager class to create new manager object for htmlPage generation
const Manager = require('./lib/Manager');

// array of questions for inquirer to ask user
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: (questionAnswer) => {
            if (questionAnswer) {
                return true
            }
            console.log('You must enter your name!');
            return false
        }
    },
    {
        type: 'number',
        name: 'id',
        message: 'What is your employee ID number?',
        validate: (questionAnswer) => {
            if (questionAnswer) {
                return true
            }
            console.log('You must enter your employee ID number!');
            return false
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: (questionAnswer) => {
            if (questionAnswer) {
                return true
            }
            console.log('You must enter your email address!');
            return false
        }
    },
    {
        type: 'number',
        name: 'office',
        message: 'What is your office number?',
        validate: (questionAnswer) => {
            if (questionAnswer) {
                return true
            }
            console.log('You must enter your office number!');
            return false
        }
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your engineer's name?",
        validate: (questionAnswer) => {
            if (questionAnswer) {
                return true
            }
            console.log('You must enter their name!');
            return false
        }
    },
    {
        type: 'number',
        name: 'id',
        message: "What is your engineer's employee ID number?",
        validate: (questionAnswer) => {
            if (questionAnswer) {
                return true
            }
            console.log('You must enter their employee ID number!');
            return false
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your engineer's email address?",
        validate: (questionAnswer) => {
            if (questionAnswer) {
                return true
            }
            console.log('You must enter their email address!');
            return false
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your engineer's GitHub username?",
        validate: (questionAnswer) => {
            if (questionAnswer) {
                return true
            }
            console.log('You must enter their GitHub username!');
            return false
        }
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your intern's name?",
        validate: (questionAnswer) => {
            if (questionAnswer) {
                return true
            }
            console.log('You must enter their name!');
            return false
        }
    },
    {
        type: 'number',
        name: 'id',
        message: "What is your intern's employee ID number?",
        validate: (questionAnswer) => {
            if (questionAnswer) {
                return true
            }
            console.log('You must enter their employee ID number!');
            return false
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your intern's email address?",
        validate: (questionAnswer) => {
            if (questionAnswer) {
                return true
            }
            console.log('You must enter their email address!');
            return false
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your intern's school?",
        validate: (questionAnswer) => {
            if (questionAnswer) {
                return true
            }
            console.log('You must enter their school!');
            return false
        }
    }
];

const menu = [
    {
        type: 'list',
        name: 'menuChoice',
        message: 'Select an Option',
        choices: ['Create an Engineer Profile', 'Create an Intern Profile', 'Finish and Generate Html Page']
    }
];

// called by promptUser() to gather htmlData for generateHTML
const addEmployee = employeeRoster => {
    // If there's no empoyees array then create one.
    if(!employeeRoster.employees) {
        employeeRoster.employees = [];
    }

    // Start command line menu for user to 1) enter an engineer. 2) enter an intern. 3) Finish employee roster and generate html output
    teamMenu()
    .then(choice => {
    console.log(choice);
    if (choice.menuChoice === 'Create an Engineer Profile') {
        // create an engineer profile to add to employeeRoster.employees
        console.log(choice.menuChoice);
        employeeRoster.employees.push(inquirer.prompt(engineerQuestions));
        return teamMenu()
    } else if (choice.menuChoice === 'Create an Intern Profile') {
    // create an intern profile to add to employeeRoster.employees
        console.log(choice.menuChoice);
        employeeRoster.employees.push(inquirer.prompt(internQuestions));
        return teamMenu()
    } else if (choice.menuChoice === 'Finish and Generate Html Page') {
        // return employeeRoster.employees to promptUser function for htmlData for generateHTML
        console.log(choice.menuChoice);
        return employeeRoster.employees
    }
    })
    .catch(err => {
        // console log errors from inquirer.prompt(menu)
        console.log(err);
    });


};

// take user to menu to add employees to roster
function teamMenu() {
    return inquirer.prompt(menu)
};

// prompt user for questions for manager profile
function promptUser() {
    return inquirer.prompt(managerQuestions)
};

// call app into function
promptUser()
.then(data => {
    console.log(data);
    const manager = new Manager(data);
    let employeeRoster = [manager];
    return addEmployee(employeeRoster);
})
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