const inquirer = require("inquirer");
const fs = require("fs");

//needs if statements for license badge
//needs clickable table of contents that takes you to certain location in readme


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
        choices:[ 'MIT License', 'Mozilla License', ]
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

    var title = response.title
    var license = response.license
    var description = response.description
    var usage = response.usage
    var contribution = response.contribution
    var test = response.test
    var email = response.email
    var github = response.github

    var readmeFile = 
    `# ${title}
   
${license}

## Description
 
${description}

## How To Use

${usage}
    
## How To Constribute

${contribution}

## How To Test

${test} 

## Questions
    
What is my github?

https://github.com/${github}

How do you contact me?

${email}

    `
    



    fs.writeFile('readmeGenerated.md', readmeFile , (err) => 
    err ? console.error(err) : console.log('success')
    
    );

})