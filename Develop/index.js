const inquirer = require('inquirer');
const fs = require('fs');



inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter a description of your project',
      name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'List any contributors',
        name: 'contrib',
    },
    {
      type: 'checkbox',
      message: 'Select a License',
      name: 'license',
      choices: [
        {name: "BSD",},
        {name: "MIT",},
        {name: "GNU",},
      ]
     },
     {
      type: 'input',
      message: 'What is your GitHub?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your Email?',
      name: 'email',
    },
  ])


  .then((response) => {
    if (response.license == "MIT") {
      var badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    if (response.license == "BSD") {
      var badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    }
    if (response.license == "GNU") {
      var badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }
    
    const readme =  
`# ${response.title}
    
## Description
    
${response.description}

## Table of Contents 



* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Questions](#questions)

## Installation


${response.installation}



## Usage

${response.usage}

## Credits

${response.contrib}

## License
${badge}
${response.license}

## Questions

${response.github}
${response.email}
`
  fs.writeFile('Test.md', readme, (err) =>
  err ? console.error(err) : console.log('Success!')
    )
  })