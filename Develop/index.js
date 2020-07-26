var inquirer = require("inquirer");
fs = require('fs');

// array of questions for user
const questions = [
	{
		type: "input",
		message: "What is your project's Title?",
		name: "title"
	  },
	  {
		type: "editor",
		message: "What is your project's Description?",
		name: "description"
	  },
	
	{
		  type: "editor",
		  message: "What are your Installation Instructions?",
		  name: "installation"
	}
	/*
	{
		type: "editor",
		message: "What is your Usage Information?",
		name: "usage_info"
	},
	{
		type: "editor",
		message: "What are your Contribution Guidelines?",
		name: "contrib_guidelines"
	},
	{
		type: "editor",
		message: "What are your Test Instructions?",
		name: "test_instructions"
	}
	*/
];

// function to write README file
function writeToFile(fileName, data) {
	fs.appendFile(`${fileName}.md`, data, function (err) {
	if (err) return console.log(err);
		console.log('Error writing to file.');
	});
	process.exit();
}

// function to initialize program
function init(questions) {
	inquirer
	.prompt(questions)
	.then(function(response) {

	const sanitizedTitle = response.title;

	const data = `# ${response.title}\n\n## Description\n\n${response.description}\n## Table of Contents\n\nInstallation\nUsage Information\nContribution Guidelines\nTest Instructions\n## Installation\n\n${response.installation}\n`

	writeToFile(sanitizedTitle, data);
	
	/*
	const title = `# ${response.title}\n\n`;
	writeToFile(sanitizedTitle, title);	

	const description = `## Description\n\n${response.description}\n`;
	writeToFile(sanitizedTitle, description);

	const table_of_contents = `
		## Table of Contents\n\n
		Installation\n
		Usage Information\n
		Contribution Guidelines\n
		Test Instructions\n
		`;
	writeToFile(sanitizedTitle, table_of_contents);

	const installation = `## Installation\n\n${response.installation}\n`;
	writeToFile(sanitizedTitle, installation);
	*/

  });
}

// function call to initialize program
init(questions);






