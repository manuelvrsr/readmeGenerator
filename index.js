const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
      type: 'input',
      message: 'what is your name?',
      name: 'Name',
    },
    {
      type: 'input',
      message: 'what is your Github?',
      name: 'Github',
    },
    {
      type: 'input',
      message: 'what is your LinkedIn?',
      name: 'LinkedIn',
    },
    {
        type: 'input',
        message: 'What are your hobbies',
        name: 'Hobbies',
      },
  ])
 
 
 
 
 
  .then ((response) => {
     console.log(response);

     var name = response.Name;
     var github = response.Github;
     var linkedIn = response.LinkedIn;
     var hobbies  = response.Hobbies;
     var html = `<!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Document</title>
     </head>
     <body>
        
         <h2 id="question1">name:
     
         </h2>
     
         <h3 id="answer1">
         ${name}
     
         </h3>
        
         <h2 id="question2">Github:
     
         </h2>
         
         <h3 id="answer2">
         ${github}
             
         </h3>
         
         <h2 id="question3">LinkedIn
     
         </h2>
        
         <h3 id="answer3">
         ${linkedIn}
             
         </h3>
         
         <h2 id="question4">Hobbies:
     
         </h2>
         
         <h3 id="answer4">
         ${hobbies}
             
         </h3>
     
     
         
     
     
     </body>
     </html>`

     fs.writeFile('index.html', html , (err) => 
     err ? console.error(err) : console.log('success')
     
     );


 }) 

