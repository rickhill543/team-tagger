const Employee = require('./Employee');
// intern class
class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;
      this.roleType = "Intern";
    }
  }
  
  module.exports = Intern;