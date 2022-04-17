const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super();

        this.name = name;
        this.github = github;
        this.id = id;
        this.email = email;
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;