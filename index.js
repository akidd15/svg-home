const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer")

const questions = [
{
    itemName: "logoText",
    type: "input",
    message: "Enter up to 3 characters.",
},
{
    itemName: "textColor",
    type: "input",
    message: "Enter a text color, or a hexadecimal number.",
},
{
    itemName: "logoShape",
    type: "input",
    message: "Select in a shape.",
    choices: ["Circle", "Triangle", "Square"],
},
{
    itemName: "shapeColor",
    type: "input",
    message: "Enter in a shape color, or a hexadecimal number.",
},

];

function init() {
    inquirer.propmt(questions).then(function(data) {
        var filename = "logo.svg";
        writeTofile(filename,data);
    })
};
init();
