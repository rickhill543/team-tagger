const Manager = require('../lib/Manager');
jest.mock('../lib/Manager');

test('creates a manager member', () => {
    const manager = new Manager();
    expect(manager.name).toBe("Manager");
    expect(manager.id).toBe(1);
    expect(manager.email).toBe("manager@email");
    expect(manager.officeNumber).toBe(90);
  });