//make 'require' variables
//make prompt with questions
  //make sure to use corect input type
//console log responses so that you can target elements on th object created
//make a var that has a string litterall of the entire readme, and add the inputs to it
//do a fs writefile so that a new file is created
const inquirer = require("inquirer");
const fs = require("fs");



inquirer.prompt([
      
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
      },
     
      {
        type: 'list',
        message: 'What license badge would you like?',
        name: 'license',
        choices:[ 'MIT', 'Mozilla', 'Apache','AGPL','GPLv3' ]
      },
     
      {
        type: 'input',
        message: 'What does it do? (description)',
        name: 'description',
      },
     
      {
        type: 'input',
        message: 'How do you install this?',
        name: 'install',
      },
    
      {
        type: 'input',
        message: 'How do i use this?',
        name: 'usage',
      },
      
      {
        type: 'input',
        message: 'What are your contribution guidelines?',
        name: 'contribution',
      },
      
      {
        type: 'input',
        message: 'Test instructions?',
        name: 'test',
      },

      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },

      {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
      },
        
        
    
])
.then ((response) => {
    console.log(response);

    var title = response.title;
    var license = response.license;
    var description = response.description;
    var install = response.install;
    var usage = response.usage;
    var contribution = response.contribution;
    var test = response.test;
    var email = response.email;
    var github = response.github;

    var readmeFile = 
    `# ${title}
   
![License: ${license}](https://img.shields.io/badge/License-${license}-orange.svg)

## Table of Contents

1. [Description](#description)
2. [How To Install](#install)
3. [How To Use](#use)
4. [How To Constribute](#contribute)
5. [How To Test](#test)
6. [Github/Contact Info](#questions)

## Description 
<h2 id="description"></h2> 

${description}

## How To Install
<h2 id="install"></h2> 

${install}

## How To Use
<h2 id="use"></h2> 

${usage}
    
## How To Constribute
<h2 id="contribute"></h2> 

${contribution}

## How To Test
<h2 id="test"></h2> 

${test} 

## Questions
<h2 id="questions"></h2> 

How do you contact me?

feel free to reach me at ${email}

Where can i view other projects?

Checkout my [Github](https://github.com/${github}) for other repositories!
  `
    



    fs.writeFile('readmeGenerated.md', readmeFile , (err) => 
    err ? console.error(err) : console.log('success')
    
    );

})