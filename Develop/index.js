var inquirer = require("inquirer");

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
		message: "What is your Table of Contents?",
		name: "table_of_contents"
	},
	  {
		  type: "editor",
		  message: "What are your Installation Instructions?",
		  name: "inst_instruct"
	  },
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
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init(questions) {
	inquirer
	.prompt(questions)
	.then(function(response) {

	console.log(response.title);
	console.log(response.description);
	console.log(response.inst_instruct);

  });
}

// function call to initialize program
init(questions);






