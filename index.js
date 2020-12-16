const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMD = require('./utils/generateMarkdown.js')

const writeFilePromise = util.promisify(fs.writeFile);

// array of questions for user
const userPrompt = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What would you like to call your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description for your project.',
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please enter installation instructions for your project',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter the usage instructions here',
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Please explain how someone may contribute to your project here',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license would you like to use?',
            choices: ['MIT', 'GNU', 'Apache'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github name',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email so you can be reached by those who wish to contribute but have a question!'
        },

    ])
}

// function to initialize program
init = async () => {
    console.log('hi');
    try{
        const answers = await userPrompt();
        
        const readmeText = generateMD(answers);

        await writeFilePromise('README.md', readmeText);

        console.log('made it this far');
    } catch (err) {
        console.log(err);
    }
 
}

// function call to initialize program
init();