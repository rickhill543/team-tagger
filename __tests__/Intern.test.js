const Intern = require('../lib/Intern');
jest.mock('../lib/Intern');

test('creates an intern member', () => {
    const intern = new Intern();
    expect(intern.name).toBe("Intern");
    expect(intern.id).toBe(3);
    expect(intern.email).toBe("intern@email");
    expect(intern.officeNumber).toBe(100);
  });