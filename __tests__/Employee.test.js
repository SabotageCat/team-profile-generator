const Employee = require('../lib/Employee');

describe('employee class', () => {
    it('cweate an employee object', () => {
        const employee = new Employee('Robert', 1, 'me@robert.com');

        expect(employee.name).toBe('Robert');
        expect(employee.id).toBe(1);
        expect(employee.email).toBe('me@robert.com');
    });

    it('getName() from empoyee object', () => {
        const employee = new Employee('Robert', 1, 'me@robert.com');

        expect(employee.getName()).toBe('Robert');
    });

    it('getId() from empoyee object', () => {
        const employee = new Employee('Robert', 1, 'me@robert.com');

        expect(employee.getId()).toBe(1);
    });

    it('getEmail() from empoyee object', () => {
        const employee = new Employee('Robert', 1, 'me@robert.com');

        expect(employee.getEmail()).toBe('me@robert.com');
    });

    it('getRole() from empoyee object', () => {
        const employee = new Employee('Robert', 1, 'me@robert.com');

        expect(employee.getRole()).toBe('Employee');
    });
});