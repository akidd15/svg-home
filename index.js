const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes")

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
    //var renderLogo = renderLogo(data);
fs.writeFile(fileName, data, function(error) {
    if (error) 
    return console.log(error);
})
console.log("Rendering Logo...")
};

function init() {
    inquirer.prompt(questions).then(function(data) { 
           const {
            logoText, textColor, logoShape, shapeColor 
           } = data
           if (logoShape === "Circle") {
            const circle = new Circle (logoText, textColor, shapeColor) 
            circle.render()
            circle.setcolor(shapeColor);
            writeTofile("./examples/logo.svg", circle.render()) 
           } 
           if (logoShape === "Square") {
            const square = new Square (logoText, textColor, shapeColor)
            square.render()
            square.setcolor(shapeColor);
            writeTofile("./examples/logo.svg", square.render()) 
           }
           if (logoShape === "Triangle") {
            const triangle = new Triangle (logoText, textColor, shapeColor)
            triangle.render()
            triangle.setcolor(shapeColor);
            writeTofile("./examples/logo.svg", triangle.render())
           } 
        
    })
};
init();
