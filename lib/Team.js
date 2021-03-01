// packages and links
const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const generateMarkup = require('../lib/generate-markup');

// team class that builds the array of the team
class Team {
    constructor() {
        this.manager;
        this.engineer;
        this.currentMember;
        this.members = [];
    }
  
    // team initalization function
    initializeTeam() {
        inquirer
        .prompt(
            [
                {
                type: 'text',
                name: 'name',
                message: 'What is the name of the team manager?',
                validate: testingInput => {
                    if (testingInput) {
                      return true;
                    } else {
                      console.log("Please enter the manager's name!");
                      return false;
                    }
                  }
                },
                {
                type: 'text',
                name: 'id',
                message: "What is the team manager's id?",
                validate: testingInput => {
                    if (testingInput) {
                      return true;
                    } else {
                      console.log("Please enter the manager's id!");
                      return false;
                    }
                  }
                },
                {
                type: 'text',
                name: 'email',
                message: "What is the team manager's email?",
                validate: testingInput => {
                    if (testingInput) {
                      return true;
                    } else {
                      console.log("Please enter the manager's email!");
                      return false;
                    }
                  }
                },
                {
                type: 'text',
                name: 'officeNumber',
                message: "What is the team manager's officeNumber?",
                validate: testingInput => {
                    if (testingInput) {
                      return true;
                    } else {
                      console.log("Please enter the manager's office number!");
                      return false;
                    }
                  }
                }
            ])

            // adds manager to the group
        .then(({ name, id, email, officeNumber }) => {
          this.manager = new Manager(name, id, email, officeNumber);
          this.members.push(this.manager);
          this.additionalTeam();
        })
      }

      // additional team members function that quits if none is selected
      additionalTeam() {
        inquirer
        .prompt({
                type: 'list',
                name: 'role',
                message: 'Would you like to add another member?',
                choices: ['Engineer', 'Intern', 'No']
                }
            )
        .then(({ role }) => {
            if (role == "No") {
                return generateMarkup(this.members);
            }
            let roleType = role;
            console.log("roleType: " + roleType);
            inquirer
            .prompt(
                [
                    {
                    type: 'text',
                    name: 'name',
                    message: `What is the ${role}'s name?`,
                    validate: testingInput => {
                        if (testingInput) {
                          return true;
                        } else {
                          console.log(`Please enter your ${role}'s name.`);
                          return false;
                        }
                      }
                    },
                    {
                    type: 'text',
                    name: 'id',
                    message: `What is the ${role}'s id?`,
                    validate: testingInput => {
                        if (testingInput) {
                          return true;
                        } else {
                          console.log(`Please enter your ${role}'s id.`);
                          return false;
                        }
                      }
                    },
                    {
                    type: 'text',
                    name: 'email',
                    message: `What is the ${role}'s email?`,
                    validate: testingInput => {
                        if (testingInput) {
                          return true;
                        } else {
                          console.log(`Please enter your ${role}'s email.`);
                          return false;
                        }
                      }
                    }
                ])
                // special cases
                .then(({ name, id, email}) => {
                    if (roleType == "Engineer") {
                        inquirer
                        .prompt(
                            {
                            type: 'text',
                            name: 'github',
                            message: `What is the ${roleType}'s GitHub account name?`,
                            validate: testingInput => {
                                if (testingInput) {
                                  return true;
                                } else {
                                  console.log("Please enter your engineer's GitHub account name!");
                                  return false;
                                }
                              }
                            }
                        )
                        .then(({ github }) => {
                            this.currentMember = new Engineer(name, id, email, github);
                            this.members.push(this.currentMember);
                            this.additionalTeam();
                        })
                        .catch(err => {
                            console.log(err);
                          });
                    } else if (roleType == "Intern") {
                        inquirer
                        .prompt(
                            {
                            type: 'text',
                            name: 'school',
                            message: `What school did ${roleType} go to?`,
                            validate: testingInput => {
                                if (testingInput) {
                                  return true;
                                } else {
                                  console.log("Please enter your intern's school!");
                                  return false;
                                }
                              }
                            }
                        )
                        .then(({ school }) => {
                            this.currentMember = new Intern(name, id, email, school);
                            this.members.push(this.currentMember);
                            this.additionalTeam();
                        })
                        .catch(err => {
                            console.log(err);
                          });
                    } else {
                        return;
                    }
                })
                .catch(err => {
                    console.log(err);
                  });
        })
    }
  }
  
  module.exports = Team;