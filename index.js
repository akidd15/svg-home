const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer")

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

function writeTofile(filename, data) {
fs.writeFile(fileName)
}

function init() {
    inquirer.prompt(questions).then(function(data) {    
        var filename = "logo.svg";
        //writeTofile(filename,data);
    })
};
init();
