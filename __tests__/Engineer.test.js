const Engineer = require('../lib/Engineer');

describe('Engineer Class', () => {

    it('create an engineer object', () => {
        const engineer = new Engineer('Robert', 1, 'me@robert.com', 'https://github.com/me');

        expect(engineer.name).toBe('Robert');
        expect(engineer.id).toBe(1);
        expect(engineer.email).toBe('me@robert.com');
        expect(engineer.github).toBe('https://github.com/me');
    });

    it('getGithub() from engineer object', () => {
        const engineer = new Engineer('Robert', 1, 'me@robert.com', 'https://github.com/me');

        expect(engineer.getGithub()).toBe('https://github.com/me');
    });

    it('getRole() from engineer object', () => {
        const engineer = new Engineer('Robert', 1, 'me@robert.com', 'https://github.com/me');

        expect(engineer.getRole()).toBe('Engineer');
    });
});