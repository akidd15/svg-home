const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const shapes = require("./lib/shapes")

const questions = [
{
    name: "logoText",
    type: "input",
    message: "Enter up to 3 characters.",
},
{
    name: "textColor",
    type: "input",
    message: "Enter a text color, or a hexadecimal number.",
},
{
    name: "logoShape",
    type: "list",
    message: "Select in a shape.",
    choices: ["Circle", "Triangle", "Square"],
},
{
    name: "shapeColor",
    type: "input",
    message: "Enter in a shape color, or a hexadecimal number.",
},

];

// fix writefile function
function writeTofile(fileName, data) {
    var renderLogo = renderLogo(data);
fs.writeFile(fileName, data)
};

function init() {
    inquirer.prompt(questions).then(function(data) { 
        var fileName = "logo.svg";   
        writeTofile(fileName, data)
    })
};
init();
