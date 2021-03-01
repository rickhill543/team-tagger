const Employee = require('./Employee');
// manager class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.roleType = "Manager";
  }
}

module.exports = Manager;