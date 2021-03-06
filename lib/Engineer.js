const inquirer = require('inquirer');
const Employee = require('./Employee');
// engineer class
class Engineer extends Employee {
    constructor(name, id, email, github) {
      super(name, id, email);
      this.github = github;
      this.roleType = "Engineer";
    }
  }
  
  module.exports = Engineer;