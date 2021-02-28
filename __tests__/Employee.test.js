const Employee = require('../lib/Employee');
jest.mock('../lib/Employee');

test('creates an intern member', () => {
    const employee = new Employee();
    expect(employee.name).toBe("Employee");
    expect(employee.id).toBe(4);
    expect(employee.email).toBe("employee@email");
    expect(employee.officeNumber).toBe(105);
  });