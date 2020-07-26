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
	},
	{
		type: "list",
		message: "Choose your Github License:",
		name: "license",
		choices: ["The MIT License", "The Apache License", "The GPL License"]
	}
];

// function to write README file
function writeToFile(fileName, data) {

	console.log(data);

	fs.writeFile(`${fileName}.md`, data, function (err) {
	if (err) return console.log(err);
		console.log('Error writing to file.');
		console.log(err);
	});
	//process.exit();
}

// function to initialize program
function init(questions) {
	inquirer
	.prompt(questions)
	.then(function(response) {

	const sanitizedTitle = response.title;

	let chosenLicense = '';
	if (response.license = "The MIT License") {
		chosenLicense = "![MIT License](./assets/mit_license_1.png)"
	} else if (response.license = "The Apache License") {
		chosenLicense = "![Apache License](./assets/apache_license_1.png)"
	} else if (response.license = "The GPL License") {
		chosenLicense = "![GPL License](./assets/gpl_license_1.png)"
	}

	const allData = `# ${response.title} ${chosenLicense}\n\n## Description\n\n${response.description}\n\n## Table of Contents\n\n- Installation\n- Usage Information\n- Contribution Guidelines\n- Test Instructions\n\n- License\n\n## Installation\n\n${response.installation}\n\n## Usage Information\n\n${response.usage_info}\n\n## Contribution Guidelines\n\n${response.contrib_guidelines}\n\n## Test Instructions\n\n${response.test_instructions}\n\n## License\n\n${chosenLicense}`;

	writeToFile(sanitizedTitle, allData);
	
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






