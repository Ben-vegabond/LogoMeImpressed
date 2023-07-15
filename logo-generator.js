const inquirer = require('inquirer');
const svgwrite = require('svgwrite');

const questions = [
    {
      name: 'companyName',
      message: 'Enter the company name:',
    },
    {
      name: 'logoColor',
      message: 'Enter the logo color:',
      default: 'blue',
    },
    // Add more questions as needed
  ];
  

inquirer.prompt(questions).then((answers) => {
    // Access the user's answers
    const companyName = answers.companyName;
    const logoColor = answers.logoColor;
  
    // Generate the SVG logo using the user's input
    const svg = svgwrite.drawing(800, 400);
    const text = svg.text(companyName, insert=[400, 200]);
    text.font_size = 48;
    text.fill = logoColor;
  
    // Save the SVG logo to a file
    const outputFilePath = 'logo.svg';
    svg.save(outputFilePath);
  
    console.log(`Logo generated and saved as ${outputFilePath}`);
  });
  