const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super();

        this.name = name;
        this.school = school;
        this.id = id;
        this.email = email;
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;