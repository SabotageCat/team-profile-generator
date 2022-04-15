const Intern = require('../lib/Intern');

describe('Intern Class', () => {

    it('create an intern object', () => {
        const intern = new Intern('Robert', 1, 'me@robert.com', 'UT Austin');

        expect(intern.name).toBe('Robert');
        expect(intern.id).toBe(1);
        expect(intern.email).toBe('me@robert.com');
        expect(intern.school).toBe('UT Austin');
    });

    it('getSchool() from intern object', () => {
        const intern = new Intern('Robert', 1, 'me@robert.com', 'UT Austin');

        expect(intern.getSchool()).toBe('UT Austin');
    });

    it('getRole() from intern object', () => {
        const intern = new Intern('Robert', 1, 'me@robert.com', 'UT Austin');

        expect(intern.getRole()).toBe('Intern');
    });
});