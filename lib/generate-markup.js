const fileName = "./dist/team-tagger.html";
const fs = require('fs');
let markupTemplate = "";
let atr = "";
let atrB = "";
let icon = "";

function generateMarkupBuild(members) {
    for (i=0;i<members.length;i++) {
        if (members[i].roleType == "Manager") {
            atr = members[i].officeNumber
            atrB = "Office Number";
            icon = `<i class="fas fa-mug-hot"></i>`;
        } else if (members[i].roleType == "Engineer") {
            atr = `<a href="https://github.com/${members[i].github}" target="_blank">${members[i].github}</a>`
            atrB = 'GitHub';
            icon = `<i class="fas fa-glasses"></i>`;
        } else {
            atr = members[i].school
            atrB = "School";
            icon = `<i class="fas fa-book"></i>`;
        }
        markupTemplate = markupTemplate +  `

        <div class="card team-tag">
            <div class="card-header bg-success">
                <h2 class="card-title employee-name">${members[i].name}</h2>
                <h3 class="card-title employee-icon">${icon} ${members[i].roleType}</h3>
            </div>
            <div class="card-body">
                <ul class="card-list list-group">
                    <li class="list-item list-id list-group-item">ID: ${members[i].id}</li>
                    <li class="list-item list-email list-group-item">Email: <a href="mailto:${members[i].email}">${members[i].email}</a></li>
                    <li class="list-item list-alt list-group-item">${atrB}: ${atr}</li>
                </ul>
            </div>
        </div>

    `;
    }
}

function generateMarkup(members) {
    let markupBuild = generateMarkupBuild(members);
    const markup =  `
    <!DOCTYPE html>
    <html lang="en-us">
    
    <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>
        <link rel="stylesheet"href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"crossorigin="anonymous"/>
        <link rel="stylesheet" href="./style.css">
        <title>Team Tagger Profile Generator</title>
    </head>
    
    <body>

        <div class="container-fluid bg-primary header-row">
            <div class="row">
                <div class="col-12 spc">
                    <h1 class="header">The 'A' Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-tags col-12">

    ${markupTemplate}

            </div>
        </div>
    </div>
    </body>
    
    </html>

  `;
  writeToFile(fileName, markup);
  }

  function writeToFile(fileName, markup) {
    return new Promise((resolve, reject) => {
      fs.writeFile(fileName, markup, err => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: 'File created!'
        });
        console.log(`
  
File Created
  
        `);
      });
    });
  }
  
  module.exports = generateMarkup;