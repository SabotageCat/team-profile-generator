const Manager = require('../lib/Manager');

describe('Manager Class', () => {

    it('create an Manager object', () => {
        const manager = new Manager('Robert', 1, 'me@robert.com', 42);

        expect(manager.name).toBe('Robert');
        expect(manager.id).toBe(1);
        expect(manager.email).toBe('me@robert.com');
        expect(manager.officeNumber).toBe(42);
    });

    it('getRole() from Manager object', () => {
        const manager = new Manager('Robert', 1, 'me@robert.com', 42);

        expect(manager.getRole()).toBe('Manager');
    });
});