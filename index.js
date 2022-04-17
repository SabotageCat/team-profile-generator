// Include inquirer to ask for user input on their team
const inquirer = require('inquirer');
// Include generateHTML util to create htmlPage from user input
const generateHTML = require('./src/generateHTML');
// Include writeFile util to write htmlPage to /dist
const writeFile = require('./utils/writeFile');
// Include employee classes to create new objects for htmlPage generation
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// employee roster
let employeeRoster = [];

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
        name: 'officeNumber',
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
        name: 'school',
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

const menuChoices = [
    {
        type: 'list',
        name: 'choice',
        message: 'Select an Option',
        choices: ['Create an Engineer Profile', 'Create an Intern Profile', 'Finish and Generate Html Page']
    }
];

const promptUser = () => {
    return inquirer.prompt(managerQuestions)
    .then(managerData => {
        const { name, id, email, officeNumber } = managerData;
        const manager = new Manager (name, id, email, officeNumber);

        employeeRoster.push(manager);
    })
};

const menu = () => {
    return inquirer.prompt(menuChoices)
    .then(choice => {
        if(choice.choice === 'Create an Engineer Profile') {
            console.log('Chosen to create Engineer profile');
            return engineer()
        } else if(choice.choice === 'Create an Intern Profile') {
            console.log('Chosen to create Intern Profile');
            return intern()
        } else {
            return employeeRoster
        }
    })
};

const engineer = () => {
    return inquirer.prompt(engineerQuestions)
    .then(engineerData => {
        let { name, id, email, github } = engineerData;
        let engineer = new Engineer (name, id, email, github);
        employeeRoster.push(engineer);
        
        return menu(employeeRoster);
    })
};

const intern = () => {
    return inquirer.prompt(internQuestions)
    .then(internData => {
        let { name, id, email, school } = internData;
        let intern = new Intern (name, id, email, school);
        employeeRoster.push(intern);
        
        return menu(employeeRoster);
    })
};


promptUser()
.then(menu)
.then(employeeRoster => {
    return generateHTML(employeeRoster)
})
.then(htmlPage => {
    console.log('Your HTML page has been written! Check out /dist!');
    return writeFile(htmlPage)
})
.catch(err => {
    console.log(err);
})