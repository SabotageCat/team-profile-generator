const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super();

        this.name = name;
        this.officeNumber = officeNumber;
        this.id = id;
        this.email = email;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;