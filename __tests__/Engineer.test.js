const Engineer = require('../lib/Engineer');
jest.mock('../lib/Engineer');

test('creates an engineer member', () => {
    const engineer = new Engineer();
    expect(engineer.name).toBe("Engineer");
    expect(engineer.id).toBe(2);
    expect(engineer.email).toBe("engineer@email");
    expect(engineer.officeNumber).toBe(95);
  });